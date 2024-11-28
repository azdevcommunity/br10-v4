'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function CTASection() {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="backdrop-blur-sm bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 rounded-3xl p-8 md:p-12 shadow-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Get Started with BR10 Today
                        </h2>
                        <p className="text-xl md:text-2xl mb-10 text-white/90">
                            Seamless bookings at your fingertips. Join the future of service management.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <Button size="lg" className="bg-white text-indigo-600 hover:bg-purple-100 transition-colors duration-300 shadow-lg">
                                Find a Business
                            </Button>
                            <Button size="lg" variant="outline" className="border-2 hover:bg-white/20 transition-colors duration-300">
                                Learn More
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
            <div className="absolute top-1/2 right-0 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
            <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        </section>
    )
}