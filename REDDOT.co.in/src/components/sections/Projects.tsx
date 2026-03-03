"use client";

import { projects } from '@/data';
import { motion } from 'framer-motion';
import { ExternalLink, Github, CheckCircle2, Lightbulb, Zap, Bot } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Modal from '@/components/ui/Modal';

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <section id="projects" className="py-24 bg-black relative border-y border-gray-800 overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/5 rounded-full blur-[150px] -z-10 pointer-events-none" />

            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Featured Projects</h2>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg">Showcasing our best work in AI automation and software development.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 shadow-sm hover:shadow-[0_0_30px_-5px_rgba(255,140,0,0.3)] transition-all duration-300 flex flex-col hover:border-orange-500/50 hover:-translate-y-1"
                        >
                            <div className="relative h-48 w-full bg-gray-800 overflow-hidden shrink-0">
                                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-gray-500">
                                    {project.image ? (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <span>No Image</span>
                                    )}
                                </div>
                                <div className="absolute top-4 right-4 z-10">
                                    <span className={`px-3 py-1 text-xs font-bold rounded-full bg-black/90 backdrop-blur-sm ${project.status === 'Live' ? 'text-green-500' : 'text-orange-500'}`}>
                                        {project.status}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="mb-4 flex-grow">
                                    <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">
                                        {project.category}
                                    </span>
                                    <h3 className="text-xl font-bold text-white mt-1 mb-2 group-hover:text-[rgb(var(--primary-color))] transition-colors">{project.title}</h3>
                                    <p className="text-gray-400 text-sm line-clamp-3">{project.description}</p>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.slice(0, 3).map((tech) => (
                                        <span key={tech} className="px-2 py-1 text-xs text-gray-400 bg-gray-800 rounded border border-gray-700">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="px-2 py-1 text-xs text-gray-400 bg-gray-800 rounded border border-gray-700">
                                            +{project.technologies.length - 3}
                                        </span>
                                    )}
                                </div>

                                <div className="flex gap-4 pt-4 border-t border-gray-800 mt-auto">
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="flex items-center gap-2 text-sm text-orange-500 hover:text-orange-400 font-bold focus:outline-none transition-colors"
                                    >
                                        <ExternalLink className="w-4 h-4" /> View Details
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Modal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                title={selectedProject?.title}
            >
                {selectedProject && (
                    <div className="space-y-6">
                        <div className="relative h-64 w-full rounded-xl overflow-hidden bg-gray-800">
                            {selectedProject.image ? (
                                <Image
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full text-gray-500">No Image</div>
                            )}
                            <div className="absolute top-4 right-4">
                                <span className={`px-4 py-1 text-sm font-bold rounded-full bg-black/90 backdrop-blur-sm shadow-sm ${selectedProject.status === 'Live' ? 'text-green-500' : 'text-orange-500'}`}>
                                    {selectedProject.status}
                                </span>
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {selectedProject.technologies.map((tech) => (
                                    <span key={tech} className="px-3 py-1 text-sm text-gray-300 bg-gray-800 rounded-full font-medium border border-gray-700">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <p className="text-gray-300 leading-relaxed text-lg">
                                {(selectedProject as any).details?.overview || selectedProject.description}
                            </p>
                        </div>

                        {(selectedProject as any).details && (
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-gray-900 p-5 rounded-xl border border-gray-800">
                                    <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                                        <Lightbulb className="w-5 h-5 text-amber-500" /> Key Features
                                    </h4>
                                    <ul className="space-y-2">
                                        {(selectedProject as any).details.features.map((feature: string, idx: number) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                                                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-orange-900/10 p-5 rounded-xl border border-orange-900/30">
                                        <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                                            <Zap className="w-5 h-5 text-orange-500" /> The Challenge
                                        </h4>
                                        <p className="text-sm text-gray-400">
                                            {(selectedProject as any).details.challenge}
                                        </p>
                                    </div>

                                    <div className="bg-green-900/10 p-5 rounded-xl border border-green-900/30">
                                        <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                                            <Bot className="w-5 h-5 text-green-500" /> The Solution
                                        </h4>
                                        <p className="text-sm text-gray-400">
                                            {(selectedProject as any).details.solution}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="flex justify-end pt-4 border-t border-gray-800">
                            <Link
                                href={selectedProject.link}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[rgb(var(--primary-color))] text-white rounded-lg hover:bg-orange-600 transition-colors font-bold shadow-lg shadow-orange-600/20"
                            >
                                Visit Project <ExternalLink className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                )}
            </Modal>
        </section>
    );
}
