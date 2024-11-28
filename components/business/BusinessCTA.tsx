'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function BusinessCTA() {
    return (
        <section className="py-20 px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-5xl mx-auto"
            >
                <div className="relative bg-[#5850EC] rounded-[48px] overflow-hidden">
                    {/* Animated background elements */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 0.1, scale: 1 }}
                        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 0.1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full"
                    />

                    {/* Content */}
                    <div className="relative px-8 py-20 md:py-32 text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto"
                        >
                            Ready to Take Your Business to the Next Level?
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto"
                        >
                            Join BR10 today and start growing your customer base.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <Link href="/signup">
                                <Button
                                    size="lg"
                                    className="bg-white text-[#5850EC] hover:bg-white/90 text-lg px-8 py-6 rounded-xl font-semibold"
                                >
                                    Sign Up Now
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}