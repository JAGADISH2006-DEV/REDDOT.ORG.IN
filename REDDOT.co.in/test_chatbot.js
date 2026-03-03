// using global fetch (Node 18+)

async function test() {
    const baseUrl = 'http://localhost:3000';
    console.log("Testing Chatbot APIs...");

    // 1. Initial Analytics
    try {
        const res1 = await fetch(`${baseUrl}/api/analytics`);
        const stats1 = await res1.json();
        console.log("Initial Stats:", stats1);
    } catch (e) {
        console.error("Failed to fetch analytics (server might be starting...):", e.message);
        return;
    }

    // 2. Mock Chat Message
    try {
        console.log("\nSending Chat Message...");
        const res2 = await fetch(`${baseUrl}/api/chat`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                messages: [{ role: 'user', content: "I need a quote for an AI agent" }]
            })
        });
        const chatRes = await res2.json();
        console.log("Chat Response:", chatRes);
    } catch (e) {
        console.error("Failed to send chat:", e.message);
    }

    // 3. Updated Analytics
    try {
        console.log("\nChecking Updated Stats...");
        const res3 = await fetch(`${baseUrl}/api/analytics`);
        const stats3 = await res3.json();
        console.log("Updated Stats:", stats3);

        if (stats3.totalConversations > 0 && stats3.totalLeads > 0) {
            console.log("\n✅ SUCCESS: Conversations and leads tracked!");
        } else {
            console.log("\n❌ FAILURE: Stats not updated.");
        }
    } catch (e) {
        console.error("Failed to fetch updated analytics:", e.message);
    }
}

// execute if running directly
test();
