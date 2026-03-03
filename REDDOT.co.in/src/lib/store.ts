export type Message = {
    role: 'user' | 'assistant' | 'system';
    content: string;
    timestamp: number;
};

export type Conversation = {
    id: string;
    messages: Message[];
    detectedLeads: string[]; // keywords found
    createdAt: number;
};

class InMemoryStore {
    private conversations: Conversation[] = [];
    private leads: string[] = [];

    addConversation(conversation: Conversation) {
        this.conversations.push(conversation);
    }

    addMessageToConversation(conversationId: string, message: Message) {
        const conv = this.conversations.find(c => c.id === conversationId);
        if (conv) {
            conv.messages.push(message);
        } else {
            // Create if not exists (shouldn't usually happen with proper flow, but good fallback)
            this.conversations.push({
                id: conversationId,
                messages: [message],
                detectedLeads: [],
                createdAt: Date.now()
            });
        }
    }

    addLead(lead: string) {
        this.leads.push(lead);
    }

    getStats() {
        return {
            totalConversations: this.conversations.length,
            totalLeads: this.leads.length,
            recentConversations: this.conversations.slice(-5) // Last 5
        };
    }
}

// Global instance to persist across HMR in dev (to some extent) if attached to global, 
// but for simple module scope in Next.js serverless functions, it might reset on cold starts.
// For a simple demo/dev server, this module-level singleton works 'okay' while the process is alive.
export const store = new InMemoryStore();
