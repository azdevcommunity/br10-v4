'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Cloud, Check, X, HelpCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const features = [
    { name: "100 GB SSD Storage", included: true },
    { name: "Weekly Backups", included: true },
    { name: "Unlimited Free SSL", included: true },
    { name: "24/7 system Monitoring", included: true },
    { name: "Free Domain ($9.99 value)", included: true },
    { name: "Dedicated IP Address", included: false },
    { name: "20+ Payment Methods", included: false },
]

const plans = [
    {
        name: "Premium Plans",
        monthlyPrice: 99,
        yearlyPrice: 891, // 25% off
        bgColor: "bg-[#1a1033]",
        textColor: "text-white",
        buttonVariant: "default",
    },
    {
        name: "Extended Plan",
        monthlyPrice: 149,
        yearlyPrice: 1341, // 25% off
        bgColor: "bg-[#6366f1]",
        textColor: "text-white",
        buttonVariant: "outline",
    },
]

export default function BusinessPricing() {
    const [isYearly, setIsYearly] = useState(false)

    return (
        <section className="py-20 bg-[#f5f3ff]">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="relative">
                        {/* Decorative elements */}
                        <div className="absolute -left-20 top-20 hidden lg:block">
                            <Image
                                src="/img_1.png"
                                alt="Decorative cursor"
                                width={200}
                                height={200}
                                className={"rotate-45"}
                            />
                        </div>
                        <div className="absolute -right-20 bottom-0 hidden lg:block">
                            <Image
                                src="/img_2.png"
                                alt="Decorative element"
                                width={200}
                                height={200}
                            />
                        </div>

                        {/* Header */}
                        <div className="text-center mb-12">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-block bg-[#e6e6fa] text-[#6366f1] px-4 py-1 rounded-full text-sm font-medium mb-4"
                            >
                                OUR PRICING PLAN
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-5xl font-bold mb-8"
                            >
                                Our Awesome Pricing Plan
                            </motion.h2>

                            {/* Toggle */}
                            <div className="flex items-center justify-center gap-4 mb-12">
                                <button
                                    onClick={() => setIsYearly(false)}
                                    className={`px-4 py-2 rounded-full ${!isYearly ? 'bg-[#6366f1] text-white' : 'text-gray-600'}`}
                                >
                                    Monthly
                                </button>
                                <button
                                    onClick={() => setIsYearly(true)}
                                    className={`px-4 py-2 rounded-full ${isYearly ? 'bg-[#6366f1] text-white' : 'text-gray-600'}`}
                                >
                                    Yearly
                                </button>
                                <span className="text-[#6366f1] font-medium">Save 25%</span>
                            </div>
                        </div>

                        {/* Pricing Cards */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {plans.map((plan) => (
                                <motion.div
                                    key={plan.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`rounded-3xl ${plan.bgColor} p-8 relative overflow-hidden`}
                                >
                                    <div className="absolute top-4 right-4">
                                        <Cloud className="w-12 h-12 text-blue-300/50" />
                                    </div>

                                    <h3 className={`text-2xl font-bold mb-4 ${plan.textColor}`}>
                                        {plan.name}
                                    </h3>
                                    <div className={`text-3xl font-bold mb-8 ${plan.textColor}`}>
                                        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                                        <span className="text-lg font-normal">/{isYearly ? 'Year' : 'Month'}</span>
                                    </div>

                                    <div className="space-y-4 mb-8">
                                        {features.map((feature) => (
                                            <div key={feature.name} className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    {feature.included ? (
                                                        <Check className={`w-5 h-5 ${plan.textColor}`} />
                                                    ) : (
                                                        <X className={`w-5 h-5 ${plan.textColor}/50`} />
                                                    )}
                                                    <span className={`${plan.textColor} ${!feature.included && 'opacity-50'}`}>
                            {feature.name}
                          </span>
                                                </div>
                                                <HelpCircle className={`w-4 h-4 ${plan.textColor}/30`} />
                                            </div>
                                        ))}
                                    </div>

                                    <Link href="/signup">
                                        <Button
                                            className="w-full rounded-full"
                                        >
                                            Get Started Now
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

