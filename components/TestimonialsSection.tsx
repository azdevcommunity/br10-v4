'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const testimonials = [
    {
        title: "Affordable",
        text: "BR10 has been a great software for us. We were able to scale our business and automate almost all of it because of BR10. Moreover, it is reasonably priced for any startup",
        name: "Mohamed Irfan",
        role: "Co-founder",
        company: "Ahmed Company | Steel products manufacturing",
        image: "/placeholder.svg"
    },
    {
        title: "Efficient",
        text: "The booking system has transformed how we manage appointments. The automated notifications and easy scheduling have made our operations much more efficient.",
        name: "Sarah Johnson",
        role: "Owner",
        company: "City Salon & Spa | Beauty services",
        image: "/placeholder.svg"
    },
    {
        title: "Reliable",
        text: "Since implementing BR10, we've seen a significant reduction in no-shows and better customer engagement. The platform is incredibly reliable and user-friendly.",
        name: "Michael Chen",
        role: "Director",
        company: "Elite Fitness | Health and wellness",
        image: "/placeholder.svg"
    },
    {
        title: "Innovative",
        text: "The unique ID system and real-time updates have revolutionized how we handle bookings. BR10's innovative approach sets it apart from other platforms.",
        name: "Emily Rodriguez",
        role: "Manager",
        company: "Dental Care Plus | Healthcare services",
        image: "/placeholder.svg"
    }
]

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <section className="py-32 relative overflow-hidden bg-gray-50">
            {/* Background Pattern */}
            <div className="absolute inset-0 grid grid-cols-6 gap-8 opacity-[0.03] p-8">
                {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="text-4xl font-bold">
                        A
                    </div>
                ))}
            </div>

            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                    {/* Left Column */}
                    <div>
                        <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
                            See how our customers drive impact
                        </h2>
                        <Link
                            href="/success-stories"
                            className="inline-flex items-center text-lg text-blue-700 hover:text-blue-800 transition-colors"
                        >
                            Read more success stories
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>

                    {/* Right Column */}
                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                className="bg-blue-600 text-white rounded-3xl p-8 md:p-12"
                            >
                                <h3 className="text-2xl md:text-3xl font-medium mb-6">
                                    {testimonials[currentIndex].title}
                                </h3>
                                <p className="text-lg md:text-xl mb-8 text-blue-100">
                                    {testimonials[currentIndex].text}
                                </p>
                                <div className="flex items-center gap-4">
                                    <Image
                                        src={testimonials[currentIndex].image}
                                        alt={testimonials[currentIndex].name}
                                        width={48}
                                        height={48}
                                        className="rounded-full"
                                    />
                                    <div>
                                        <div className="font-medium">
                                            {testimonials[currentIndex].name}, {testimonials[currentIndex].role}
                                        </div>
                                        <div className="text-blue-200 text-sm">
                                            {testimonials[currentIndex].company}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation */}
                        <div className="flex items-center justify-between mt-6">
                            <div className="flex gap-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                            index === currentIndex ? 'w-4 bg-blue-600' : 'bg-gray-300'
                                        }`}
                                    />
                                ))}
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={prevTestimonial}
                                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={nextTestimonial}
                                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Decorative Line */}
                        <div className="absolute -bottom-16 left-0 right-0">
                            <svg
                                viewBox="0 0 400 50"
                                className="w-full h-auto text-gray-300"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path
                                    d="M0,25 C100,10 200,40 400,25"
                                    strokeWidth="1"
                                    strokeDasharray="2 2"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}