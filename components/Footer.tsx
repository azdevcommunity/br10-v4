import Link from 'next/link'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <nav className="space-y-2">
                            <Link href="/" className="block hover:text-primary transition-colors">
                                Home
                            </Link>
                            <Link href="#features" className="block hover:text-primary transition-colors">
                                Features
                            </Link>
                            <Link href="#how-it-works" className="block hover:text-primary transition-colors">
                                How It Works
                            </Link>
                            <Link href="#for-businesses" className="block hover:text-primary transition-colors">
                                For Businesses
                            </Link>
                            <Link href="#contact" className="block hover:text-primary transition-colors">
                                Contact Us
                            </Link>
                        </nav>
                        <div className="mt-4 space-x-2">
                            <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">
                                Privacy Policy
                            </Link>
                            <span className="text-gray-600">|</span>
                            <Link href="/terms-of-service" className="text-sm text-gray-400 hover:text-white transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                        <p className="mb-2">Email: support@br10.com</p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-primary transition-colors" aria-label="LinkedIn">
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
                                <Facebook className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} BR10. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

