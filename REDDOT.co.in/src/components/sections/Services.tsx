"use client";

import { services } from '@/data';
import { motion } from 'framer-motion';
import { Check, ArrowRight, X } from 'lucide-react';
import { useState } from 'react';

export default function Services() {
    const [expandedService, setExpandedService] = useState<string | null>(null);

    return (
        <section id="services" className="py-24 bg-black relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[128px] -z-10 opacity-50 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[128px] -z-10 opacity-50 pointer-events-none" />

            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-orange-900/20 mb-4 border border-orange-900/30">
                        <span className="text-sm font-bold text-orange-500 tracking-wide uppercase">Our AI Services</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Comprehensive AI Solutions</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        From intelligent agents to complete SaaS platforms, we deliver cutting-edge AI solutions that transform your business operations and drive unprecedented growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-8 rounded-3xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 shadow-sm hover:shadow-[0_0_30px_-5px_rgba(255,140,0,0.3)] transition-all duration-300 flex flex-col h-full hover:border-orange-500/50 hover:-translate-y-1"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-14 h-14 bg-orange-900/20 rounded-2xl flex items-center justify-center p-3 group-hover:bg-[rgb(var(--primary-color))] transition-colors duration-300">
                                    <service.icon className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                                </div>
                                {service.tag && (
                                    <span className="px-3 py-1 text-xs font-semibold text-gray-400 bg-gray-800 rounded-lg border border-gray-700">
                                        {service.tag}
                                    </span>
                                )}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[rgb(var(--primary-color))] transition-colors">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>

                            <div className="mt-auto space-y-3 mb-8">
                                {service.features?.slice(0, 3).map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <Check className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                                        <span className="text-sm text-gray-400">{feature}</span>
                                    </div>
                                ))}
                                {service.features && service.features.length > 3 && (
                                    <div className="text-sm text-gray-500 pl-7">+ {service.features.length - 3} more features</div>
                                )}
                            </div>

                            <button
                                onClick={() => setExpandedService(service.title)}
                                className="inline-flex items-center text-orange-500 font-bold text-sm hover:gap-2 transition-all group/btn"
                            >
                                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Modal/Overlay for Expanded Service */}
                {expandedService && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setExpandedService(null)}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="bg-gray-900 rounded-3xl p-8 max-w-5xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl border border-gray-800"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setExpandedService(null)}
                                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-800 transition-colors"
                                aria-label="Close details"
                            >
                                <X className="w-6 h-6 text-gray-400" />
                            </button>

                            {services.find(s => s.title === expandedService) && (
                                <>
                                    {(() => {
                                        const activeService = services.find(s => s.title === expandedService)!;
                                        return (
                                            <>
                                                {/* Header */}
                                                <div className="flex items-center gap-4 mb-8">
                                                    <div className="w-16 h-16 bg-orange-900/20 rounded-2xl flex items-center justify-center border border-orange-900/30">
                                                        <activeService.icon className="w-8 h-8 text-orange-500" />
                                                    </div>
                                                    <div>
                                                        <span className="text-sm font-bold text-orange-500 uppercase tracking-wider block mb-1">{activeService.tag}</span>
                                                        <h3 className="text-3xl font-extrabold text-white">{activeService.title}</h3>
                                                    </div>
                                                </div>

                                                {/* Service Overview */}
                                                <div className="mb-10">
                                                    <h4 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
                                                        <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                                                        Service Overview
                                                    </h4>
                                                    <p className="text-gray-300 leading-relaxed text-lg">
                                                        {activeService.description}
                                                    </p>
                                                </div>

                                                {/* Three Column Grid */}
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                                    {/* Key Benefits */}
                                                    <div className="bg-black/50 rounded-2xl p-6 border border-gray-800">
                                                        <h5 className="flex items-center gap-2 text-lg font-bold text-white mb-4">
                                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                                            Key Benefits
                                                        </h5>
                                                        <ul className="space-y-3">
                                                            {activeService.benefits?.map((benefit, i) => (
                                                                <li key={i} className="flex items-start gap-3">
                                                                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                                                    <span className="text-sm text-gray-300">{benefit}</span>
                                                                </li>
                                                            )) || <li className="text-gray-500 text-sm">Benefits listing...</li>}
                                                        </ul>
                                                    </div>

                                                    {/* Use Cases */}
                                                    <div className="bg-black/50 rounded-2xl p-6 border border-gray-800">
                                                        <h5 className="flex items-center gap-2 text-lg font-bold text-white mb-4">
                                                            <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                            Use Cases
                                                        </h5>
                                                        <ul className="space-y-3">
                                                            {activeService.useCases?.map((useCase, i) => (
                                                                <li key={i} className="flex items-center gap-3">
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                                                                    <span className="text-sm text-gray-300">{useCase}</span>
                                                                </li>
                                                            )) || <li className="text-gray-500 text-sm">Use cases listing...</li>}
                                                        </ul>
                                                    </div>

                                                    {/* Tech Stack */}
                                                    <div className="bg-black rounded-2xl p-6 text-white shadow-lg border border-gray-800">
                                                        <h5 className="flex items-center gap-2 text-lg font-bold text-white mb-4">
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                                                            Tech Stack
                                                        </h5>
                                                        <div className="flex flex-wrap gap-2">
                                                            {activeService.techStack?.map((tech, i) => (
                                                                <span key={i} className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded-full text-xs font-medium transition-colors cursor-default border border-gray-700">
                                                                    {tech}
                                                                </span>
                                                            )) || <span className="text-gray-500 text-sm">Tech details...</span>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        );
                                    })()}
                                </>
                            )}
                        </motion.div>
                    </div>
                )}
            </div>
        </section>
    );
}
