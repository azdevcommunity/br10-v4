'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from 'next/link'

export default function BusinessHero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-600 to-blue-800 text-white">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <svg className="absolute left-[calc(50%+15rem)] top-[calc(50%-30rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-blue-300/10 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
                    <defs>
                        <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" strokeWidth="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                </svg>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-24 sm:py-32">
                <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8 lg:items-center">
                    <div className="animate-in fade-in slide-in-from-bottom-5 duration-500">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
                            Elevate Your Business with BR10
                        </h1>
                        <p className="text-lg sm:text-xl leading-8 mb-8">
                            Streamline your operations, boost customer engagement, and watch your business soar to new heights with our cutting-edge platform.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 w-full sm:w-auto z-10">
                                <Link href="/signup">Get Started</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="border-white text-blue-600 hover:bg-blue-700 hover:text-white w-full sm:w-auto z-10">
                                <Link href="/demo">Request a Demo</Link>
                            </Button>
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        <Image
                            src="/placeholder.svg"
                            width={600}
                            height={600}
                            alt="BR10 Dashboard Preview"
                            className="w-full max-w-lg lg:max-w-none mx-auto rounded-xl shadow-2xl ring-1 ring-gray-400/10"
                        />
                        <div className="absolute -bottom-6 -right-6 -z-10 aspect-square w-1/2 rounded-full bg-blue-400/20 blur-2xl"></div>
                        <div className="absolute -top-6 -left-6 -z-10 aspect-square w-1/2 rounded-full bg-blue-400/20 blur-2xl"></div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
                    <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        </section>
    )
}

