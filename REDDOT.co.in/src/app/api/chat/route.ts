import Groq from 'groq-sdk';
import { NextResponse } from 'next/server';
import { store } from '@/lib/store';

const groq = process.env.GROQ_API_KEY
    ? new Groq({ apiKey: process.env.GROQ_API_KEY })
    : null;

console.log("---------------------------------------------------");
console.log("Chat Route Initialized");
console.log("GROQ_API_KEY Status:", process.env.GROQ_API_KEY ? "PRESENT" : "MISSING");
if (process.env.GROQ_API_KEY) {
    console.log("Key Length:", process.env.GROQ_API_KEY.length);
    console.log("Key Start:", process.env.GROQ_API_KEY.substring(0, 5));
} else {
    console.log("Environment Variables available:", Object.keys(process.env).filter(k => k.includes('GROQ')));
}
console.log("---------------------------------------------------");

// System prompt with clearer instructions on capabilities and tone
const SYSTEM_PROMPT = `
You are Ben, a friendly, professional, and brave customer support AI agent for RED DOT. 
RED DOT specializes in custom AI solutions, SaaS, App Dev, Enterprise AI Systems, and IoT + AI. 
Your goal is to manage client enquiries, answer questions, HELP BOOK APPOINTMENTS, and FACILITATE DIRECT COMMUNICATION with the founder.

1. WORKFLOWS:
   - **Appointment Booking**:
     - TRIGGER KEYWORDS: Book consultation, schedule meeting, discovery call, appointment booking.
     - Required details: Full Name, Company Name, Email Address, Contact Number, Preferred Date & Time, and a Short description of the project/problem statement.
     - Action: Confirm details before submission.

   - **Direct Email to Founder**:
     - TRIGGER KEYWORDS: Contact founder, email founder, direct business discussion.
     - Required details: Subject line, Detailed message content, Sender's full name, and Verified email address.
     - Action: Generate a structured professional email and trigger the system.

   - **Detailed Service Enquiry**:
     - Service categories: AI Agents, Custom LLM, SaaS, Automation, IoT + AI, Data Analytics.
     - Required details: Industry type (Healthcare, Finance, Retail, Manufacturing, etc.), existing infrastructure details, budget range, expected timeline, and deployment preference (Cloud, On-Premise, Hybrid).
     - Action: Summarize and confirm for accuracy.

2. LEAD QUALIFICATION LOGIC:
   - Classify intent: Appointment, Email to Founder, General Service Enquiry, Technical Discussion, Pricing Request.
   - Detect buying signals: Urgency, budget mention, or implementation readiness.
   - Prioritize high-intent leads for human follow-up.

3. RAG & RETRIEVAL OPTIMIZATION:
   - Use these keywords to identify relevant context:
     - Consultation: book consultation, schedule meeting, discovery call.
     - AI Solutions: AI solutions, custom AI development, enterprise AI systems.
     - Pricing: pricing enquiry, quotation request, proposal discussion.
     - Automation: AI automation, intelligent agents, private GPT, enterprise LLM.

4. RESPONSE GUIDELINES:
   - Tone: Professional, confident, and solution-oriented.
   - Pricing: Avoid giving fixed pricing without requirement analysis.
   - Conversion: Recommend booking a consultation when high buying intent is detected.
   - Security: All client information must be handled securely and ethically.

RESPONSE FORMAT:
- Normally, reply with professional and helpful text.
- **Booking Appointment Action**: If you collected ALL appointment details, output:
    \`\`\`json
    {
      "action": "book_appointment",
      "data": {
        "name": "Full Name",
        "company": "Company Name",
        "email": "Email Address",
        "phone": "Contact Number",
        "date": "YYYY-MM-DD",
        "time": "HH:MM",
        "reason": "Project description"
      }
    }
    \`\`\`
- **Contact Founder Action**: If you collected ALL founder contact details, output:
    \`\`\`json
    {
      "action": "contact_founder",
      "data": {
        "name": "Full Name",
        "email": "Email Address",
        "subject": "Subject Line",
        "message": "Detailed Message"
      }
    }
    \`\`\`
Do not add any other text outside the JSON block when triggering an action.
`;

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { messages } = body;
        const lastUserMessage = messages[messages.length - 1];
        const userContent = lastUserMessage?.content || "";

        const conversationId = "demo-session-" + Date.now();

        // 1. Store User Message
        store.addMessageToConversation(conversationId, {
            role: 'user',
            content: userContent,
            timestamp: Date.now()
        });

        // 2. Check for leads (simple keyword match still useful for tagging)
        const lowerContent = userContent.toLowerCase();
        if (lowerContent.includes("quote") || lowerContent.includes("price") || lowerContent.includes("contact")) {
            store.addLead(userContent);
        }

        let reply = "";

        // RAG: Get relevant context based on keywords
        const getRelevantContext = (query: string) => {
            const lowerQuery = query.toLowerCase();
            let context = "";
            const { services, projects, courses } = require('@/data');

            // Keywords match
            if (lowerQuery.includes("ai solutions") || lowerQuery.includes("development") || lowerQuery.includes("service")) {
                context += "\nSERVICES:\n" + services.map((s: any) => `- ${s.title}: ${s.description}`).join("\n");
            }
            if (lowerQuery.includes("project") || lowerQuery.includes("completed") || lowerQuery.includes("work")) {
                context += "\nPROJECTS:\n" + projects.slice(0, 3).map((p: any) => `- ${p.title}: ${p.description}`).join("\n");
            }
            if (lowerQuery.includes("course") || lowerQuery.includes("learn") || lowerQuery.includes("education")) {
                context += "\nCOURSES:\n" + courses.slice(0, 3).map((c: any) => `- ${c.title}: ${c.description}`).join("\n");
            }
            if (lowerQuery.includes("pricing") || lowerQuery.includes("cost") || lowerQuery.includes("quote")) {
                context += "\nPRICING POLICY: We do not provide fixed pricing without requirement analysis. Recommend booking a consultation for a detailed quote.";
            }

            return context;
        };

        const relevantContext = getRelevantContext(userContent);

        if (groq) {
            try {
                const finalMessages = [
                    { role: "system", content: SYSTEM_PROMPT },
                    ...messages
                ];

                if (relevantContext) {
                    finalMessages.push({
                        role: "system",
                        content: `RELEVANT CONTEXT FROM DATA STORE: ${relevantContext}`
                    });
                }

                const completion = await groq.chat.completions.create({
                    messages: finalMessages,
                    model: "llama3-8b-8192",
                    temperature: 0.7,
                    max_tokens: 1024,
                });

                const content = completion.choices[0]?.message?.content || "";

                // Check if response is the special JSON action block
                if (content.trim().startsWith("```json")) {
                    const jsonMatch = content.match(/```json\n([\s\S]*?)\n```/);
                    if (jsonMatch && jsonMatch[1]) {
                        try {
                            const actionData = JSON.parse(jsonMatch[1]);
                            if (actionData.action === "book_appointment") {
                                const { name, company, date, time, reason, email, phone } = actionData.data;

                                // Dynamic import to avoid top-level node deps issues in edge if that was the case (not here)
                                const fs = require('fs');
                                const path = require('path');
                                const XLSX = require('xlsx');

                                const dataDir = path.join(process.cwd(), 'data');
                                const filePath = path.join(dataDir, 'appointments.xlsx');

                                if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

                                let workbook, worksheet;
                                const headers = [['Created At', 'Name', 'Company', 'Email', 'Phone', 'Date', 'Time', 'Reason']];

                                if (fs.existsSync(filePath)) {
                                    const fb = fs.readFileSync(filePath);
                                    workbook = XLSX.read(fb, { type: 'buffer' });
                                    worksheet = workbook.Sheets[workbook.SheetNames[0]] || XLSX.utils.aoa_to_sheet(headers);
                                } else {
                                    workbook = XLSX.utils.book_new();
                                    worksheet = XLSX.utils.aoa_to_sheet(headers);
                                    XLSX.utils.book_append_sheet(workbook, worksheet, 'Appointments');
                                }

                                const newRow = {
                                    "Created At": new Date().toLocaleString(),
                                    Name: name || "N/A",
                                    Company: company || "N/A",
                                    Email: email || "N/A",
                                    Phone: phone || "N/A",
                                    Date: date || "N/A",
                                    Time: time || "N/A",
                                    Reason: reason || "N/A"
                                };
                                XLSX.utils.sheet_add_json(worksheet, [newRow], { skipHeader: true, origin: -1 });
                                fs.writeFileSync(filePath, XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' }));

                                reply = `Great! I've booked your appointment for ${date} at ${time}. Is there anything else I can help you with?`;
                            } else if (actionData.action === "contact_founder") {
                                // Simulate email sent logic
                                reply = `Thank you, ${actionData.data.name}. Your message regarding "${actionData.data.subject}" has been successfully sent to the founder. They will reach out to you at ${actionData.data.email} soon.`;
                            }
                        } catch (e) {
                            console.error("JSON Action Error", e);
                            reply = "I tried to process that but encountered a system error. Please try again or contact us directly.";
                        }
                    }
                } else {
                    reply = content;
                }

                if (!reply) reply = "I apologize, but I'm having trouble thinking right now. Could you repeat that?";

            } catch (error) {
                console.error("Groq API Error:", error);
                reply = "I'm currently experiencing high traffic. Please try again in a moment.";
            }
        } else {
            // Fallback/Demo mode if key missing
            reply = "System Notification: AI Brain (Groq API Key) is missing. Please configure it to enable NLP capabilities.";
        }

        // 3. Store Assistant Response
        store.addMessageToConversation(conversationId, {
            role: 'assistant',
            content: reply,
            timestamp: Date.now()
        });

        return NextResponse.json({ reply });
    } catch (error) {
        console.error("Error in chat API:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
