'use client'

import { motion } from 'framer-motion'
import { CreditCard, Search, CalendarCheck } from 'lucide-react'

const steps = [
    {
        icon: CreditCard,
        title: 'Get the Unique ID',
        description: 'Ask your service provider for their BR10 ID.',
    },
    {
        icon: Search,
        title: 'Visit Their Booking Page',
        description: 'Use the ID to find their profile and services.',
    },
    {
        icon: CalendarCheck,
        title: 'Book Your Service',
        description: 'Select a service, pick a date, and confirm your booking.',
    },
]

export default function HowItWorksSection() {
    return (
        <section id="how-it-works" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-200 opacity-70"></div>
                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">How It Works</h2>
                <div className="flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center text-center max-w-xs"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="mb-6 bg-white rounded-full p-6 shadow-lg">
                                <step.icon className="w-12 h-12 text-indigo-500" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-3 text-gray-800">{step.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}