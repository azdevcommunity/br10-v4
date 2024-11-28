'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Fingerprint, ArrowRight, Sparkles } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const features = [
    {
        id: 'community',
        title: 'Share here, there, and everywhere.',
        type: 'header',
        className: 'col-span-full'
    },
    {
        id: 'messaging',
        title: 'Instant Talk',
        type: 'feature',
        icon: MessageSquare,
        className: 'md:col-span-1'
    },
    {
        id: 'magic',
        title: 'Fine Details',
        subtitle: 'Features cards section concept details by BR10.',
        type: 'feature',
        icon: Sparkles,
        className: 'md:col-span-1',
        highlighted: true
    },
    {
        id: 'security',
        title: 'Encrypted Approach',
        type: 'feature',
        icon: Fingerprint,
        className: 'md:col-span-1'
    },
    {
        id: 'explore',
        title: 'Explore Features',
        type: 'feature',
        className: 'md:col-span-2'
    }
]

export default function FeaturesSection() {
    const [hoveredId, setHoveredId] = useState<string | null>(null)

    return (
        <section className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature) => (
                        <motion.div
                            key={feature.id}
                            className={`relative rounded-3xl bg-gray-50 p-8 transition-colors hover:bg-gray-100 group ${feature.className}`}
                            onHoverStart={() => setHoveredId(feature.id)}
                            onHoverEnd={() => setHoveredId(null)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Header Style */}
                            {feature.type === 'header' && (
                                <div className="flex items-center justify-between">
                                    <h2 className="text-4xl font-bold">{feature.title}</h2>
                                    <ArrowRight
                                        className={`w-6 h-6 transform transition-transform duration-300 ${
                                            hoveredId === feature.id ? 'translate-x-1' : ''
                                        }`}
                                    />
                                </div>
                            )}

                            {/* Feature Card Style */}
                            {feature.type === 'feature' && (
                                <div className="h-full">
                                    {/* Top Section */}
                                    <div className="flex items-start justify-between mb-auto">
                                        {feature.icon && (
                                            <feature.icon className="w-6 h-6" />
                                        )}
                                        <ArrowRight
                                            className={`w-6 h-6 transform transition-transform duration-300 ${
                                                hoveredId === feature.id ? 'translate-x-1' : ''
                                            }`}
                                        />
                                    </div>

                                    {/* Bottom Section */}
                                    <div className="mt-auto">
                                        {feature.highlighted && (
                                            <div className="relative">
                                                {/* Dotted Border Effect */}
                                                <div className="absolute -inset-4 rounded-xl border-2 border-dashed border-emerald-200 -z-10" />

                                                {/* Sparkles */}
                                                <motion.div
                                                    animate={{
                                                        scale: [1, 1.2, 1],
                                                        rotate: [0, 10, 0],
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        repeatType: "reverse",
                                                    }}
                                                    className="absolute -top-4 -right-4 text-emerald-400"
                                                >
                                                    <Sparkles className="w-6 h-6" />
                                                </motion.div>
                                            </div>
                                        )}

                                        <h3 className="text-2xl font-bold mt-8 mb-2">{feature.title}</h3>
                                        {feature.subtitle && (
                                            <p className="text-gray-600">{feature.subtitle}</p>
                                        )}

                                        {feature.highlighted && (
                                            <div className="absolute bottom-6 right-6">
                                                <div className="relative">
                                                    <Avatar className="w-8 h-8">
                                                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                                                        <AvatarFallback>BR</AvatarFallback>
                                                    </Avatar>
                                                    <div className="absolute -right-2 -top-8 bg-white px-3 py-1 rounded-full shadow-lg text-sm">
                                                        Hi!
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}