'use client'

import { motion } from 'framer-motion'
import { Card } from "@/components/ui/card"

export default function BusinessStats() {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center"
                >
                    <Card className="bg-[#1c2127] w-full max-w-2xl rounded-3xl overflow-hidden">
                        <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-gray-700">
                            <div className="flex-1 p-8 text-center">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <div className="text-4xl font-bold text-white mb-2">20 000+</div>
                                    <div className="text-gray-400">partnyor</div>
                                </motion.div>
                            </div>
                            <div className="flex-1 p-8 text-center">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <div className="text-4xl font-bold text-white mb-2">2 000+</div>
                                    <div className="text-gray-400">birgə layihə</div>
                                </motion.div>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}