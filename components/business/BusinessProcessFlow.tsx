'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useAnimation, PanInfo } from 'framer-motion'
import { Upload, Zap, LineChart } from 'lucide-react'
import Image from 'next/image'

const steps = [
    {
        icon: Upload,
        number: "1",
        title: "Upload Your Data",
        description: "Simply upload your data to our secure platform. We support various file formats and data types to ensure a seamless integration with your existing systems.",
        image: "/placeholder.svg"
    },
    {
        icon: Zap,
        number: "2",
        title: "Click Start",
        description: "Our advanced AI algorithms automatically process and analyze your data, extracting valuable insights and patterns that would be difficult to identify manually.",
        image: "/placeholder.svg"
    },
    {
        icon: LineChart,
        number: "3",
        title: "Get Actionable Insights",
        description: "Receive clear, actionable insights and recommendations based on the AI analysis. Use these insights to make data-driven decisions and improve your business strategies.",
        image: "/placeholder.svg"
    }
]

export default function BusinessProcessFlow() {
    const [activeStep, setActiveStep] = useState(0)
    const [progress, setProgress] = useState(0)
    useAnimation();
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const timer = setInterval(() => {
            if (progress < 100) {
                setProgress(prev => prev + 1)
            } else {
                setActiveStep(prev => (prev + 1) % steps.length)
                setProgress(0)
            }
        }, 30) // 3 seconds total for 100% progress

        return () => clearInterval(timer)
    }, [progress])

    const handleStepClick = (index: number) => {
        setActiveStep(index)
        setProgress(0)
    }

    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const threshold = 50
        if (info.offset.x > threshold) {
            setActiveStep(prev => (prev - 1 + steps.length) % steps.length)
        } else if (info.offset.x < -threshold) {
            setActiveStep(prev => (prev + 1) % steps.length)
        }
        setProgress(0)
    }

    return (
        <section className="py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-blue-500 font-medium mb-4 block text-center"
                    >
                        HOW IT WORKS
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-center mb-20"
                    >
                        Just 3 steps to get started
                    </motion.h2>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-16 order-2 lg:order-1">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    className="flex gap-6 cursor-pointer"
                                    onClick={() => handleStepClick(index)}
                                >
                                    <div className="flex-shrink-0 relative hidden lg:block">
                                        <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
                                            <step.icon className="w-8 h-8 text-blue-500" />
                                        </div>
                                        <div className="absolute left-0 top-0 w-16 h-16 rounded-full overflow-hidden">
                                            <div
                                                className="absolute left-0 top-0 w-full h-full border-4 border-blue-500 rounded-full"
                                                style={{
                                                    clipPath: `inset(0 ${activeStep === index ? 100 - progress : 100}% 0 0)`,
                                                    transition: 'clip-path 0.1s linear'
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">
                                            {step.number}. {step.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            ref={containerRef}
                            className="order-1 lg:order-2"
                            drag="x"
                            dragConstraints={containerRef}
                            onDragEnd={handleDragEnd}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeStep}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative"
                                >
                                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                                        <Image
                                            src={steps[activeStep].image}
                                            alt={steps[activeStep].title}
                                            width={1000}
                                            height={800}
                                            className="w-full h-auto"
                                        />
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                            <div className="mt-4 lg:hidden">
                                <div className="flex justify-between mb-2">
                                    <span className="font-bold">{steps[activeStep].title}</span>
                                    <span>{activeStep + 1} / {steps.length}</span>
                                </div>
                                <div className="bg-gray-200 h-2 rounded-full">
                                    <div
                                        className="bg-red-500 h-full rounded-full transition-all duration-300 ease-out"
                                        style={{ width: `${progress}%` }}
                                    ></div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}