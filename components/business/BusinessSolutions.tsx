'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

const solutions = [
    {
        title: "Birbaşa inteqrasiya",
        description: "QR ödənişlərin qəbulu təmin olunacaq, xüsusi ekranlar və kassa cihazlarında əks olunacaq",
        image: "/placeholder.svg",
        color: "bg-[#7FFFD4]",
        imageAlt: "QR code and phone illustration"
    },
    {
        title: "POS terminallar",
        description: "PASHA Bank POS terminalını inteqrasiya etməyə kömək edəcəyik. Əgər POS terminal artıq qoşulubsa, m10 ilə ödənişləri əlavə inteqrasiya olmadan qəbul etmək mümkün olacaq",
        image: "/placeholder.svg",
        color: "bg-[#9370DB]",
        imageAlt: "POS terminal illustration"
    },
    {
        title: "Payout",
        description: "API üzrə əməkdaşlara, partnyorlara və vendorlara rahat və sürətli ödənişlər etmək imkanı verəcəyik",
        image: "/placeholder.svg",
        color: "bg-[#FA8072]",
        imageAlt: "Users with m10 logo illustration"
    },
    {
        title: "E-COM",
        description: "QR kod ilə ödənişlərin saytda və ya tətbiqdə API üzrə qəbulunu təmin edəcəyik",
        image: "/placeholder.svg",
        color: "bg-[#1A1B1E]",
        imageAlt: "Laptop with QR code illustration"
    }
]

export default function BusinessSolutions() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-5xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-center mb-16"
                >
                    Bizim həllər
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={solution.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col w-full max-w-[400px]"
                        >
                            <div className={`${solution.color} rounded-[32px] p-8 mb-4 w-full ]`}>
                                <div className="h-48 flex items-center justify-center">
                                    <Image
                                        src={solution.image}
                                        alt={solution.imageAlt}
                                        width={200}
                                        className={"rounded-xl"}
                                        height={200}
                                    />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">
                                {solution.title}
                            </h3>
                            <p className="text-gray-800 mb-6">
                                {solution.description}
                            </p>
                            <Button
                                variant="outline"
                                className="self-start bg-white hover:bg-gray-50"
                            >
                                Ətraflı
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}