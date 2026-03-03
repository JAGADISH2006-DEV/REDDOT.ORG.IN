"use client";

import { contactInfo } from '@/data';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: '',
        budget: '',
        timeline: ''
    });

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("success");
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                    service: '',
                    budget: '',
                    timeline: ''
                });
                // Reset success message after 3 seconds
                setTimeout(() => setStatus("idle"), 3000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="py-24 bg-black relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/5 rounded-full blur-[150px] -z-10 pointer-events-none" />

            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Ready to Start Your AI Journey?</h2>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                        Let's discuss how AI can transform your business. Get a free consultation and discover the possibilities that intelligent automation can unlock.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Contact Form (Left - 2 Cols) */}
                    <div className="lg:col-span-2 bg-gray-900/80 backdrop-blur-md p-8 rounded-3xl border border-gray-800 shadow-xl shadow-black/50 hover:shadow-orange-500/10 transition-shadow duration-500">
                        <h3 className="text-2xl font-bold text-white mb-8">Send us a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Row 1: Name, Email, Phone */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold text-gray-300 mb-2">Full Name *</label>
                                    <input
                                        id="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all text-white placeholder-gray-500 text-sm"
                                        placeholder="Your full name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-gray-300 mb-2">Email Address *</label>
                                    <input
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all text-white placeholder-gray-500 text-sm"
                                        placeholder="your.email@example.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-bold text-gray-300 mb-2">Phone Number</label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all text-white placeholder-gray-500 text-sm"
                                        placeholder="+91 XXXXXXXXXX"
                                    />
                                </div>
                            </div>

                            {/* Row 2: Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-gray-300 mb-2">Your Message *</label>
                                <textarea
                                    id="message"
                                    rows={6}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all text-white placeholder-gray-500 text-sm resize-none"
                                    placeholder="Tell us about your project and how we can help..."
                                    required
                                />
                            </div>

                            {/* Row 3: Service, Budget, Timeline */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <label htmlFor="service" className="block text-sm font-bold text-gray-300 mb-2">Service Interest</label>
                                    <select
                                        id="service"
                                        value={formData.service}
                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all text-white text-sm appearance-none cursor-pointer"
                                        title="Service Interest"
                                    >
                                        <option value="" disabled>Select a service</option>
                                        <option value="ai-agents">AI Agents & Automation</option>
                                        <option value="saas">AI SaaS Applications</option>
                                        <option value="app-dev">Web & Mobile Apps</option>
                                        <option value="consulting">AI Consulting</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="budget" className="block text-sm font-bold text-gray-300 mb-2">Budget Range</label>
                                    <select
                                        id="budget"
                                        value={formData.budget}
                                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all text-white text-sm appearance-none cursor-pointer"
                                        title="Budget Range"
                                    >
                                        <option value="" disabled>Select budget</option>
                                        <option value="lt-5k">&lt; $5,000</option>
                                        <option value="5k-20k">$5,000 - $20,000</option>
                                        <option value="20k-50k">$20,000 - $50,000</option>
                                        <option value="gt-50k">&gt; $50,000</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="timeline" className="block text-sm font-bold text-gray-300 mb-2">Project Timeline</label>
                                    <select
                                        id="timeline"
                                        value={formData.timeline}
                                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all text-white text-sm appearance-none cursor-pointer"
                                        title="Project Timeline"
                                    >
                                        <option value="" disabled>Select timeline</option>
                                        <option value="immediate">Immediately</option>
                                        <option value="1-3-months">1-3 Months</option>
                                        <option value="3-6-months">3-6 Months</option>
                                        <option value="exploring">Just Exploring</option>
                                    </select>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full md:w-auto px-10 py-4 rounded-xl bg-[rgb(var(--primary-color))] text-white font-bold hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/20 flex items-center justify-center gap-2 mt-4"
                            >
                                {status === "loading" ? (
                                    <span className="animate-pulse">Saving...</span>
                                ) : status === "success" ? (
                                    <span className="text-green-300">Message Saved! ✓</span>
                                ) : status === "error" ? (
                                    <span className="text-red-300">Failed to Save ✕</span>
                                ) : (
                                    <>Send Message <Send className="w-5 h-5" /></>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Contact Info (Right - 1 Col) */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 shadow-sm h-full">
                            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-orange-900/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-orange-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Email</h4>
                                        {Array.isArray(contactInfo.email) ? (
                                            contactInfo.email.map((email) => (
                                                <a key={email} href={`mailto:${email}`} className="block text-white font-medium hover:text-orange-500 transition-colors">
                                                    {email}
                                                </a>
                                            ))
                                        ) : (
                                            <a href={`mailto:${contactInfo.email}`} className="text-white font-medium hover:text-orange-500 transition-colors">
                                                {contactInfo.email}
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-orange-900/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-orange-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Phone</h4>
                                        {Array.isArray(contactInfo.phone) ? (
                                            contactInfo.phone.map((phone) => (
                                                <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="block text-white font-medium hover:text-orange-500 transition-colors">
                                                    {phone}
                                                </a>
                                            ))
                                        ) : (
                                            <a href={`tel:${contactInfo.phone}`} className="text-white font-medium hover:text-orange-500 transition-colors">
                                                {contactInfo.phone}
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-orange-900/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-orange-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Location</h4>
                                        <p className="text-white font-medium">{contactInfo.location}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-orange-900/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-6 h-6 text-orange-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Business Hours</h4>
                                        <p className="text-white font-medium">{(contactInfo as any).businessHours || "9 AM - 6 PM IST"}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 pt-8 border-t border-gray-800">
                                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Connect With Us</h4>
                                <div className="flex gap-4">
                                    {contactInfo.social.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-[rgb(var(--primary-color))] hover:text-white transition-all"
                                            aria-label={social.name}
                                        >
                                            <social.icon className="w-5 h-5" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
