import React from 'react';
import Image from 'next/image';
import { X, Download, Printer } from 'lucide-react';

interface CertificateProps {
    studentName: string;
    courseTitle: string;
    date: string;
    onClose: () => void;
}

export default function Certificate({ studentName, courseTitle, date, onClose }: CertificateProps) {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm print:bg-white print:p-0">
            {/* Modal Controls (Hidden when printing) */}
            <div className="absolute top-4 right-4 flex gap-2 print:hidden">
                <button
                    onClick={handlePrint}
                    className="flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-full transition-colors font-bold"
                >
                    <Printer className="w-4 h-4" /> Print / Save PDF
                </button>
                <button
                    onClick={onClose}
                    className="p-2 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>
            </div>

            {/* Certificate Container */}
            <div className="relative w-full max-w-5xl aspect-[1.414/1] bg-white text-black p-8 md:p-12 shadow-2xl print:shadow-none print:w-full print:h-full print:max-w-none print:absolute print:inset-0">

                {/* Decorative Border */}
                <div className="absolute inset-4 border-4 border-double border-orange-900/20 pointer-events-none" />
                <div className="absolute inset-6 border border-orange-600/30 pointer-events-none" />

                {/* Corner Decoration */}
                <div className="absolute top-6 left-6 w-16 h-16 border-t-4 border-l-4 border-orange-600 rounded-tl-3xl opacity-50" />
                <div className="absolute bottom-6 right-6 w-16 h-16 border-b-4 border-r-4 border-orange-600 rounded-br-3xl opacity-50" />

                <div className="h-full flex flex-col items-center justify-between text-center py-8 relative z-10">

                    {/* Header */}
                    <div className="space-y-4">
                        <div className="relative w-48 h-16 mx-auto mb-6">
                            <Image
                                src="/images/reddot-logo.png"
                                alt="REDDOT Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 tracking-wide uppercase">
                            Certificate of Completion
                        </h1>
                        <p className="text-gray-500 italic text-lg">This certificate is proudly details to</p>
                    </div>

                    {/* Student Name */}
                    <div className="border-b-2 border-orange-900/20 px-12 py-2 min-w-[50%]">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-orange-700 capitalize">
                            {studentName}
                        </h2>
                    </div>

                    {/* Course Details */}
                    <div className="space-y-4 max-w-2xl">
                        <p className="text-xl text-gray-700">
                            For successfully completing the comprehensive course on
                        </p>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                            {courseTitle}
                        </h3>
                        <p className="text-gray-500 text-lg">
                            Demonstrating proficiency in Artificial Intelligence technologies and practical application through REDDOT's interactive learning platform.
                        </p>
                    </div>

                    {/* Footer / Signatures */}
                    <div className="w-full flex justify-between items-end px-12 mt-8">
                        <div className="text-center">
                            <div className="border-t border-gray-400 w-48 pt-2">
                                <p className="font-bold text-lg text-gray-800">{date}</p>
                                <p className="text-gray-500 text-sm uppercase tracking-wide">Date</p>
                            </div>
                        </div>

                        {/* Gold Seal Effect */}
                        <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-orange-600/30 flex items-center justify-center p-2 bg-orange-50">
                            <div className="w-full h-full rounded-full border-2 border-dashed border-orange-600 flex items-center justify-center">
                                <span className="text-orange-800 font-bold text-xs uppercase tracking-widest -rotate-12 text-center">
                                    Verified<br />Certification
                                </span>
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="font-script text-3xl text-orange-800 mb-1" style={{ fontFamily: 'cursive' }}>
                                Jaikeerthi
                            </div>
                            <div className="border-t border-gray-400 w-48 pt-2">
                                <p className="font-bold text-lg text-gray-800">Jaikeerthi</p>
                                <p className="text-gray-500 text-sm uppercase tracking-wide">Founder & CEO</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
