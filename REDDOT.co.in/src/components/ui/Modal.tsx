"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
}

export default function Modal({ isOpen, onClose, children, title }: ModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking modal content
                    >
                        <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative">
                            <div className="sticky top-0 bg-white/90 backdrop-blur-sm p-4 border-b border-gray-100 flex justify-between items-center z-10">
                                {title && <h3 className="text-xl font-bold text-gray-900">{title}</h3>}
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                    aria-label="Close"
                                >
                                    <X className="w-5 h-5 text-gray-500" />
                                </button>
                            </div>
                            <div className="p-6">
                                {children}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
