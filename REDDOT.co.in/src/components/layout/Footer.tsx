import Link from 'next/link';
import Image from 'next/image';
import { contactInfo } from '@/data';

export default function Footer() {
    return (
        <footer className="bg-black border-t border-gray-800">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link href="/" className="flex items-center mb-4">
                            <div className="relative h-10 w-32">
                                <Image
                                    src="/images/reddot-logo.png"
                                    alt="REDDOT"
                                    fill
                                    className="object-contain"
                                    sizes="128px"
                                />
                            </div>
                        </Link>
                        <p className="mt-4 text-gray-400 max-w-xs font-medium">
                            Empowering businesses with cutting-edge AI solutions. Automate, Innovate, Dominate.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-bold text-white uppercase">Resources</h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="#blog" className="hover:text-orange-500 transition-colors">Blog</Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-orange-500 transition-colors">Documentation</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-bold text-white uppercase">Follow us</h2>
                            <ul className="text-gray-400 font-medium">
                                {contactInfo.social.map((social) => (
                                    <li key={social.name} className="mb-4">
                                        <Link href={social.href} className="hover:text-orange-500 transition-colors flex items-center gap-2 group">
                                            <social.icon className="w-4 h-4 group-hover:text-orange-500 transition-colors" />
                                            {social.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-bold text-white uppercase">Legal</h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-orange-500 transition-colors">Terms & Conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-800 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">© 2024 <Link href="/" className="hover:underline font-bold text-white">REDDOT™</Link>. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
}
