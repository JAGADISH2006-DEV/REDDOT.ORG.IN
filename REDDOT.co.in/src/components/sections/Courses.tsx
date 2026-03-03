"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, FileText, Code, Clock, BookOpen, Download, Lock } from 'lucide-react';
import Image from 'next/image';
import { courses } from '@/data';
import Certificate from '../ui/Certificate';

export default function Courses() {
    // State for active course and active lesson
    const [activeCourseId, setActiveCourseId] = useState(courses[0].id);
    const [activeLessonIndex, setActiveLessonIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSubtitle, setCurrentSubtitle] = useState("");
    const [speechQueue, setSpeechQueue] = useState<string[]>([]);
    const [currentQueueIndex, setCurrentQueueIndex] = useState(0);

    // Certification state
    const [showCertModal, setShowCertModal] = useState(false);
    const [studentName, setStudentName] = useState("");
    const [isNameModalOpen, setIsNameModalOpen] = useState(false);

    const activeCourse = courses.find(c => c.id === activeCourseId) || courses[0];
    const activeLesson = activeCourse.lessons[activeLessonIndex];

    // Handle speech synthesis
    // Handle speech synthesis
    const playNextSentence = (queue: string[], index: number) => {
        if (index >= queue.length) {
            setIsPlaying(false);
            setCurrentSubtitle("");
            return;
        }

        const text = queue[index];
        setCurrentSubtitle(text);
        setCurrentQueueIndex(index);

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1; // Slightly slower for better teaching clarity
        utterance.pitch = 1;

        // Try to select a female voice
        const voices = window.speechSynthesis.getVoices();
        const femaleVoice = voices.find(voice => voice.name.includes('Female') || voice.name.includes('Samantha') || voice.name.includes('Google US English'));
        if (femaleVoice) utterance.voice = femaleVoice;

        utterance.onend = () => {
            playNextSentence(queue, index + 1);
        };

        window.speechSynthesis.speak(utterance);
    };

    const togglePlay = () => {
        if (isPlaying) {
            window.speechSynthesis.cancel();
            setIsPlaying(false);
            setCurrentSubtitle("");
        } else {
            // If starting fresh or resuming
            window.speechSynthesis.cancel();

            // Get the script, fallback to a default if missing
            const script = (activeLesson as any).script || `Welcome to the lesson on ${activeLesson.title}. Detailed content for this lesson is coming soon.`;

            // Split into sentences regex (looks for . ! ? followed by space or end of string)
            const sentences = script.match(/[^.!?]+[.!?]+(\s|$)/g) || [script];

            setSpeechQueue(sentences);
            setIsPlaying(true);
            playNextSentence(sentences, 0);
        }
    };

    // Stop speech when changing lessons
    const handleLessonChange = (index: number) => {
        window.speechSynthesis.cancel();
        setIsPlaying(false);
        setCurrentSubtitle("");
        setSpeechQueue([]);
        setActiveLessonIndex(index);
    };

    return (
        <section id="courses" className="py-24 bg-black relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
            <div className="absolute bottom-40 right-0 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-orange-900/20 text-orange-500 text-sm font-bold mb-4 border border-orange-900/30">
                        ✨ Free AI Education
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Master AI with Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Expert Courses</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Industry-ready curriculum teaching Generative AI, Machine Learning, Data Science, and NO-CODE Automation.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-auto lg:h-[700px]">
                    {/* Main Video Player Area (Left - 8 cols) */}
                    <div className="lg:col-span-8 flex flex-col gap-6">
                        {/* Video Player Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="relative w-full aspect-video bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 shadow-2xl group"
                        >
                            {/* Placeholder for AI Teacher */}
                            <div className="relative w-full h-full">
                                <Image
                                    src="/images/ai_teacher_placeholder.png"
                                    alt="AI Teacher"
                                    fill
                                    className={`object-cover transition-all duration-500 ${isPlaying ? 'scale-105 brightness-110' : 'opacity-90 group-hover:opacity-100'}`}
                                />
                                {isPlaying && (
                                    <div className="absolute inset-0 bg-orange-500/10 animate-pulse z-0" />
                                )}
                            </div>

                            {/* Overlay UI */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 pointer-events-none" />

                            {/* Play/Pause Button */}
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <button
                                    onClick={togglePlay}
                                    className="w-20 h-20 bg-orange-600/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg shadow-orange-600/30 hover:scale-110 transition-transform duration-300 group/btn"
                                >
                                    {isPlaying ? (
                                        <div className="flex gap-1">
                                            <div className="w-1.5 h-6 bg-white rounded-full animate-[bounce_1s_infinite]" />
                                            <div className="w-1.5 h-6 bg-white rounded-full animate-[bounce_1s_infinite_0.2s]" />
                                            <div className="w-1.5 h-6 bg-white rounded-full animate-[bounce_1s_infinite_0.4s]" />
                                        </div>
                                    ) : (
                                        <Play className="w-8 h-8 text-white ml-1 fill-current group-hover/btn:scale-110 transition-transform" />
                                    )}
                                </button>
                            </div>

                            {/* Speaking Indicator */}
                            {isPlaying && (
                                <div className="absolute top-8 right-8 flex items-center gap-2 bg-black/50 backdrop-blur px-3 py-1.5 rounded-full border border-orange-500/30">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-ping" />
                                    <span className="text-xs font-bold text-orange-200">AI Teacher Speaking...</span>
                                </div>
                            )}

                            {/* Subtitle Overlay */}
                            <AnimatePresence>
                                {currentSubtitle && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        className="absolute bottom-32 left-8 right-8 z-30 flex justify-center text-center pointer-events-none"
                                    >
                                        <div className="bg-black/70 backdrop-blur-sm px-6 py-4 rounded-2xl border border-orange-500/20 shadow-2xl max-w-4xl">
                                            <p className="text-lg md:text-xl font-medium text-white leading-relaxed">
                                                {currentSubtitle}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Video Info Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 z-10 pointer-events-none">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="px-3 py-1 bg-orange-600 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                                        {isPlaying ? 'Now Playing' : 'Paused'}
                                    </span>
                                    <span className="text-gray-300 text-sm flex items-center gap-1">
                                        <Clock className="w-4 h-4" /> {activeLesson.duration}
                                    </span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white shadow-sm">{activeCourse.title}: {activeLesson.title}</h3>
                            </div>
                        </motion.div>

                        {/* Course Description & Resources */}
                        <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 flex-1">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <BookOpen className="w-5 h-5 text-orange-500" /> Course Resources
                                </h3>
                                <div className="flex gap-2">
                                    {activeCourse.resources.map((res, idx) => (
                                        <button key={idx} className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm rounded-xl transition-colors border border-gray-700">
                                            {res.type === 'pdf' ? <FileText className="w-4 h-4 text-red-400" /> : <Code className="w-4 h-4 text-blue-400" />}
                                            {res.title}
                                            <Download className="w-3 h-3 text-gray-400 ml-1" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                {activeCourse.description}
                            </p>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <span className="bg-gray-800 px-2 py-1 rounded text-xs text-gray-300 border border-gray-700">{activeCourse.category}</span>
                                <span>•</span>
                                <span>Total Duration: {activeCourse.duration}</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Playlist Sidebar (4 cols) */}
                    <div className="lg:col-span-4 flex flex-col bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden h-[700px]">
                        {/* Sidebar Header */}
                        <div className="p-6 border-b border-gray-800 bg-black/20">
                            <h3 className="text-lg font-bold text-white mb-2">Course Playlist</h3>
                            <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
                                {courses.map(course => (
                                    <button
                                        key={course.id}
                                        onClick={() => {
                                            window.speechSynthesis.cancel();
                                            setIsPlaying(false);
                                            setCurrentSubtitle("");
                                            setActiveCourseId(course.id);
                                            setActiveLessonIndex(0);
                                        }}
                                        className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-all border ${activeCourseId === course.id
                                            ? 'bg-orange-600 text-white border-orange-500'
                                            : 'bg-gray-800 text-gray-400 border-gray-700 hover:bg-gray-700'
                                            }`}
                                    >
                                        {course.category}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Lessons List */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
                            {activeCourse.lessons.map((lesson, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => handleLessonChange(idx)}
                                    className={`group p-4 rounded-2xl flex items-start gap-4 transition-all cursor-pointer border ${activeLessonIndex === idx
                                        ? 'bg-orange-900/20 border-orange-500/50'
                                        : 'bg-black/20 border-transparent hover:bg-gray-800 hover:border-gray-700'
                                        }`}
                                >
                                    <div className="relative mt-1">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${activeLessonIndex === idx ? 'bg-orange-500 text-white' : 'bg-gray-800 text-gray-500 group-hover:bg-gray-700'
                                            }`}>
                                            {idx + 1}
                                        </div>
                                        {idx !== activeCourse.lessons.length - 1 && (
                                            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-800 -z-10" />
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className={`text-sm font-semibold mb-1 ${activeLessonIndex === idx ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                                            {lesson.title}
                                        </h4>
                                        <div className="flex items-center gap-2 text-xs text-gray-600">
                                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {lesson.duration}</span>
                                            {isActiveLessonLocked(idx) && <Lock className="w-3 h-3" />}
                                        </div>
                                    </div>
                                    {activeLessonIndex === idx && (
                                        <div className="mt-2">
                                            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Footer Promo */}
                        <div className="p-6 bg-gradient-to-br from-orange-900/40 to-black border-t border-gray-800 text-center">
                            <p className="text-xs text-orange-200 mb-2">Want to certify your skills?</p>
                            <button
                                onClick={() => setIsNameModalOpen(true)}
                                className="w-full py-3 bg-[rgb(var(--primary-color))] text-white text-sm font-bold rounded-xl hover:bg-orange-700 transition-colors shadow-lg"
                            >
                                Get Certified
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Name Input Modal */}
            <AnimatePresence>
                {isNameModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="bg-gray-900 border border-gray-800 p-8 rounded-3xl max-w-md w-full relative"
                        >
                            <button
                                onClick={() => setIsNameModalOpen(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 18 18" /></svg>
                            </button>

                            <h3 className="text-2xl font-bold text-white mb-2">Claim Your Certificate</h3>
                            <p className="text-gray-400 mb-6">Enter your full name as you would like it to appear on your official certification.</p>

                            <input
                                type="text"
                                placeholder="Full Name (e.g. John Doe)"
                                value={studentName}
                                onChange={(e) => setStudentName(e.target.value)}
                                className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 text-white mb-4 focus:outline-none focus:border-orange-500 transition-colors"
                            />

                            <button
                                onClick={() => {
                                    if (studentName.trim()) {
                                        setIsNameModalOpen(false);
                                        setShowCertModal(true);
                                    }
                                }}
                                disabled={!studentName.trim()}
                                className="w-full py-3 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all shadow-lg shadow-orange-900/20"
                            >
                                Generate Certificate
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Certificate Modal */}
            {showCertModal && (
                <Certificate
                    studentName={studentName}
                    courseTitle={activeCourse.title}
                    date={new Date().toLocaleDateString()}
                    onClose={() => setShowCertModal(false)}
                />
            )}

        </section>
    );
}

// Helper to simulate some locked content (optional visual flair)
function isActiveLessonLocked(index: number) {
    return false; // All free for now!
}
