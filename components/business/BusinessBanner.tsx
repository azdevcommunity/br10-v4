'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function BusinessBanner() {
    return (
        <section className="py-12 px-4 bg-white/80">
            <motion.div
                className="max-w-6xl mx-auto bg-gradient-to-br from-emerald-100 to-emerald-100 rounded-3xl p-8 md:p-12 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold text-navy-900 mb-4"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Manage Your Business with BR10
                        </motion.h2>
                        <motion.button
                            className="inline-flex items-center px-6 py-3 rounded-full bg-white text-navy-900 font-semibold hover:bg-gray-50 transition-colors duration-200"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </motion.button>
                    </div>
                    <motion.div
                        className="md:w-1/2 flex justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="relative w-64 h-64">
                            <div className="absolute inset-0 bg-purple-600 rounded-3xl transform rotate-6"></div>
                            <div className="absolute inset-0 bg-emerald-400 rounded-3xl"></div>
                            <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-navy-900 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                                BR10
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

