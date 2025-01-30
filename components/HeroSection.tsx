'use client'

import {useEffect, useState} from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Plus, Play } from 'lucide-react'
import Image from 'next/image'
import axiosInstance from "@/utils/axios";

export default function HeroSection() {
    const [selectedDate] = useState(new Date())

    useEffect(() => {
        console.log("dsadasd")
        axiosInstance.get("/products")
            .then(response=>console.log(response.data))
            .catch(console.error)
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50">
            <div className="container mx-auto px-4 pt-20 pb-32">
                {/* Main Content */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <motion.h1
                        className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        your calendar
                        <br />
                        as a service
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-600 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        The joyful productivity app. Schedule
                        <br />
                        time for todos, events, and contacts.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button size="lg" className="bg-blue-600 text-white hover:bg-gray-900">
                            Try it now
                        </Button>
                        <span className="text-sm text-gray-500">free for personal use</span>
                    </motion.div>
                </div>

                {/* Floating UI Elements */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Calendar Widget */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="absolute left-0 top-0 w-[300px] bg-black text-white p-4 rounded-2xl shadow-xl"
                    >
                        <div className="text-sm mb-4">Select slot</div>
                        <div className="text-2xl font-semibold mb-4">
                            {selectedDate.toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric'
                            })}
                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <ChevronLeft className="w-5 h-5" />
                            <div className="flex gap-4">
                                <div className="text-center">
                                    <div className="text-xs text-gray-400">Mon</div>
                                    <div className="text-lg">24</div>
                                </div>
                                <div className="text-center bg-white/10 px-2 py-1 rounded">
                                    <div className="text-xs text-gray-400">Tue</div>
                                    <div className="text-lg">25</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xs text-gray-400">Wed</div>
                                    <div className="text-lg">26</div>
                                </div>
                            </div>
                            <ChevronRight className="w-5 h-5" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 bg-white/10 p-2 rounded">
                                <div className="text-sm">10:00 — 11:00</div>
                            </div>
                            <div className="flex items-center gap-2 p-2 rounded border border-gray-700">
                                <div className="text-sm">11:00 — 12:00</div>
                            </div>
                            <div className="flex items-center gap-2 p-2 rounded border border-gray-700">
                                <Plus className="w-4 h-4" />
                                <div className="text-sm">Add new event</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Center Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="relative mx-auto w-[300px] h-[400px] rounded-2xl overflow-hidden"
                    >
                        <Image
                            src="/placeholder.svg"
                            alt="Person looking out window"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Team Message */}
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="absolute right-[40%] top-[20%] bg-gray-100 p-4 rounded-2xl shadow-lg"
                    >
                        <p className="text-lg font-semibold">
                            Always know what your team is up to
                        </p>
                    </motion.div>

                    {/* Upcoming Events Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="absolute right-[20%] top-[40%] bg-purple-100 p-4 rounded-2xl shadow-lg w-[280px]"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 rounded-full bg-purple-200" />
                            <div>
                                <div className="font-semibold">Sophia</div>
                                <div className="text-sm text-gray-600">5m ago</div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="bg-white p-3 rounded-lg">
                                <div className="text-sm font-medium">Jan 28</div>
                                <div className="font-semibold">Design sync</div>
                                <div className="text-sm text-gray-600">1pm → 2pm</div>
                            </div>
                            <div className="bg-white p-3 rounded-lg">
                                <div className="text-sm font-medium">Jan 29</div>
                                <div className="font-semibold">Board meeting</div>
                                <div className="text-sm text-gray-600">2pm → 5pm</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Availability Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="absolute right-0 top-0 w-[300px] bg-white rounded-2xl shadow-lg overflow-hidden"
                    >
                        <div className="relative h-[200px]">
                            <Image
                                src="/placeholder.svg"
                                alt="Workspace"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white p-4 text-center">
                                <h3 className="text-2xl font-bold">
                                    Instantly know if someone is available
                                </h3>
                            </div>
                        </div>
                        <div className="p-4 flex items-center justify-center gap-2 bg-gray-50">
                            <Play className="w-4 h-4" />
                            <span>Watch how it works</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}