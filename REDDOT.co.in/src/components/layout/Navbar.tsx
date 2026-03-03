"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { navigation } from '@/data';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-black/50 backdrop-blur-md">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="relative h-12 w-40">
                        <Image
                            src="/images/reddot-logo.png"
                            alt="REDDOT"
                            fill
                            className="object-contain"
                            priority
                            sizes="160px"
                        />
                    </div>
                </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" className="text-white bg-[rgb(var(--primary-color))] hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 text-center">Get Started</button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    >
                        <span className="sr-only">Open main menu</span>
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
                <div className="hidden w-full md:block md:w-auto md:order-1">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-800 rounded-lg bg-black md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                        {navigation.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className="block py-2 px-3 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-[rgb(var(--primary-color))] md:p-0"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/95 backdrop-blur-xl border-b border-gray-800 overflow-hidden shadow-lg"
                    >
                        <ul className="flex flex-col p-4 space-y-4">
                            {navigation.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="block py-2 px-3 text-gray-200 rounded hover:bg-gray-800 font-medium"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
