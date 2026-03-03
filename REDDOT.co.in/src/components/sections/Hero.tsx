"use client";

import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Play } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useChat } from '@/components/chat/ChatContext';
import ParticleBackground from '../ui/ParticleBackground';

export default function Hero() {
    const { openChat } = useChat();

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
            {/* Particle Background */}
            <ParticleBackground />

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black pointer-events-none z-10" />

            {/* Content Container */}
            <div className="relative z-30 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="relative w-48 h-16 mx-auto mb-8"
                    >
                        <Image
                            src="/images/reddot-logo.png"
                            alt="REDDOT"
                            fill
                            className="object-contain"
                            priority
                            sizes="192px"
                        />
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-[rgb(var(--secondary-color))] mb-6 tracking-tight leading-tight">
                        Innovative <span className="text-[rgb(var(--primary-color))]">AI Solutions</span><br className="hidden md:block" /> for Modern Business
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
                        Transforming operations with <span className="font-semibold text-white">Autonomous Agents</span>, <span className="font-semibold text-white">Multi-Agent Systems</span>, and <span className="font-semibold text-white">Custom LLMs</span>.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-20 animate-fade-in-up delay-200">
                        <Link
                            href="#contact"
                            className="px-8 py-4 rounded-lg bg-[rgb(var(--primary-color))] text-white font-bold hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/25 flex items-center gap-2"
                        >
                            Get Started <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="#projects"
                            className="px-8 py-4 rounded-lg bg-black border border-gray-700 text-gray-300 font-bold hover:border-[rgb(var(--primary-color))] hover:text-[rgb(var(--primary-color))] transition-all shadow-sm hover:shadow-md flex items-center gap-2"
                        >
                            <Play className="w-5 h-5 fill-current" /> View Projects
                        </Link>
                        <button
                            className="px-8 py-4 rounded-lg bg-gray-800 text-white font-bold hover:bg-gray-700 transition-all shadow-lg hover:shadow-gray-900/25 flex items-center gap-2"
                            onClick={openChat}
                        >
                            <MessageSquare className="w-5 h-5" /> Chat With AI
                        </button>
                    </div>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-2 gap-12 max-w-2xl mx-auto pt-8 border-t border-gray-800"
                >
                    {[
                        { label: 'AI Projects Delivered', value: '15+' },
                        { label: 'Client Satisfaction', value: '100%' },
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl font-extrabold text-[rgb(var(--secondary-color))] mb-1">{stat.value}</div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
