"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { useChat } from '@/components/chat/ChatContext';

type Message = {
    role: 'user' | 'assistant';
    content: string;
};

export default function Chatbot() {
    const { isOpen, openChat, closeChat } = useChat();
    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', content: "Hi! I'm Ben, your AI assistant. How can I help you today?" }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: [...messages, { role: 'user', content: userMessage }].map(m => ({
                        role: m.role,
                        content: m.content
                    }))
                }),
            });

            const data = await response.json();

            if (data.reply) {
                setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
            } else {
                setMessages(prev => [...prev, { role: 'assistant', content: "I'm having trouble connecting right now. Please try again later." }]);
            }

        } catch (error) {
            console.error('Chat error:', error);
            setMessages(prev => [...prev, { role: 'assistant', content: "Something went wrong. Please try again." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Toggle Button */}
            <button
                onClick={openChat}
                className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-transform hover:scale-110 ${isOpen ? 'hidden' : 'flex'
                    } bg-[rgb(var(--primary-color))] text-white`}
                aria-label="Open Chat"
            >
                <MessageSquare className="w-6 h-6" />
            </button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-6 right-6 z-50 w-[350px] md:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-100 overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-[rgb(var(--primary-color))] p-4 flex items-center justify-between text-white">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white/20 rounded-full">
                                    <Bot className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">Ben</h3>
                                    <p className="text-xs text-white/80">AI Support Agent</p>
                                </div>
                            </div>
                            <button
                                onClick={closeChat}
                                className="p-1 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                                        }`}
                                >
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user'
                                        ? 'bg-gray-200 text-gray-600'
                                        : 'bg-orange-50 text-orange-600 border border-orange-100'
                                        }`}>
                                        {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                                    </div>
                                    <div
                                        className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${msg.role === 'user'
                                            ? 'bg-[rgb(var(--primary-color))] text-white rounded-tr-none shadow-sm'
                                            : 'bg-white border border-gray-100 text-gray-700 rounded-tl-none shadow-sm'
                                            }`}
                                    >
                                        {msg.content}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex items-center gap-2 text-gray-400 text-xs ml-12">
                                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-100 flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask me anything..."
                                className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 transition-all text-sm text-gray-900 placeholder:text-gray-400"
                            />
                            <button
                                type="submit"
                                disabled={isLoading || !input.trim()}
                                className="p-2.5 bg-[rgb(var(--primary-color))] text-white rounded-xl hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                            >
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
