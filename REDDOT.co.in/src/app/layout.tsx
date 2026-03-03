import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Chatbot from '@/components/chat/Chatbot';
import { ChatProvider } from '@/components/chat/ChatContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'REDDOT.co.in - AI Powered Solutions',
    description: 'Modern, futuristic, AI-powered website offering agents, automations, and SaaS solutions.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
            <body className={inter.className}>
                <ChatProvider>
                    <Navbar />
                    {children}
                    <Chatbot />
                    <Footer />
                </ChatProvider>
            </body>
        </html>
    );
}
