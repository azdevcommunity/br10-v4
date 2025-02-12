'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold text-gray-900">
                            BR10
                        </Link>
                    </div>
                    <nav className="hidden md:block">
                        <ul className="flex space-x-4">
                            <li><Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link></li>
                            <li><Link href="/#features" className="text-gray-600 hover:text-gray-900">Features</Link></li>
                            <li><Link href="/#how-it-works" className="text-gray-600 hover:text-gray-900">How It Works</Link></li>
                            <li><Link href="/business" className="text-gray-600 hover:text-gray-900">For Businesses</Link></li>
                            <li><Link href="/#contact" className="text-gray-600 hover:text-gray-900">Contact Us</Link></li>
                        </ul>
                    </nav>
                    <div className="hidden md:block">
                        <Link href={"/booking-confirmation"}>Book Now</Link>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Menu className="block h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</Link>
                        <Link href="/#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Features</Link>
                        <Link href="/#how-it-works" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">How It Works</Link>
                        <Link href="/business" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">For Businesses</Link>
                        <Link href="/#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Contact Us</Link>
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-200">
                        <div className="px-2">
                            <Button className="w-full">Book Now</Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}