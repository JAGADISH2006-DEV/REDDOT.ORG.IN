# 🤖 Chatbot Testing Guide

## ✅ **Chatbot Status: ACTIVE**

The AI chatbot is now fully functional with an automatic in-memory database! Here's what you can test:

## 🎯 **How to Test the Chatbot**

1. **Open the Website**: Visit `http://localhost:3000` in your browser or use the preview panel
2. **Find the Chat Button**: Look for the floating blue chat button in the bottom-right corner
3. **Click to Open**: The chat widget will expand with a welcome message
4. **Start Chatting**: Type any message and press Enter or click Send

## 🤖 **Current Features**

### ✅ **Working Features:**
- **Floating Chat Widget**: Appears on all pages
- **Demo AI Responses**: Intelligent fallback responses when no Groq API key is set
- **Conversation Storage**: All chats are stored in memory during development
- **Lead Detection**: Automatically detects potential leads based on keywords
- **Message History**: Maintains conversation context
- **Responsive Design**: Works on desktop and mobile

### 📊 **Automatic Database:**
- **In-Memory Storage**: No MongoDB setup required for development
- **Conversation Tracking**: Stores all user messages and AI responses
- **Lead Generation**: Automatically creates leads from conversations and contact forms
- **Analytics**: View stored data at `http://localhost:3000/api/analytics`

## 🔧 **Demo Mode**

Since no real Groq API key is configured, the chatbot runs in **demo mode** with:
- 4 different intelligent responses that rotate randomly
- Information about reddot.co.in services
- Encouragement to schedule consultations
- Professional AI assistant persona

## 📝 **Sample Conversation Starters**

Try these messages to test the chatbot:

1. **"Tell me about your AI services"**
2. **"What projects have you completed?"**
3. **"I need a quote for an AI chatbot"**
4. **"How much does an AI automation cost?"**
5. **"Can you help me with my project?"**

## 🔍 **View Analytics**

Check stored conversations and leads:
- Visit: `http://localhost:3000/api/analytics`
- See: Conversation count, contact forms, leads, and recent activity

## 🚀 **Upgrade to Full Groq AI**

To enable real AI responses:
1. Get a free API key from [Groq Console](https://console.groq.com/)
2. Replace `demo_key_get_real_key_from_groq_console` in `.env.local`
3. Restart the development server
4. Enjoy lightning-fast AI responses powered by Llama 3!

## 🎨 **UI Features**

- **Minimizable**: Click the minimize button to collapse the chat
- **Floating**: Moves with you as you scroll
- **Animated**: Smooth transitions and typing indicators
- **Quick Actions**: Pre-made buttons for common queries
- **Professional Design**: Matches the website's AI theme

## 📱 **Mobile Responsive**

The chatbot automatically adapts to:
- Phone screens (smaller chat window)
- Tablet screens (optimized layout)
- Desktop screens (full-featured experience)

---

**Test the chatbot now and see how it can engage visitors and capture leads! 🚀**