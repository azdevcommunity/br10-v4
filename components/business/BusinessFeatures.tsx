'use client'

import { motion } from 'framer-motion'
import { LayoutGrid, Lightbulb, BarChart3, Boxes, Shield, Rocket, Layers, Target } from 'lucide-react'

const features = [
  {
    icon: LayoutGrid,
    title: "Market Research",
    description: "Gain a comprehensive understanding of your industry landscape."
  },
  {
    icon: Lightbulb,
    title: "User Experience",
    description: "Evaluate the viability and potential of new products or services."
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    description: "Benchmark your performance against competitors, identify strengths."
  },
  {
    icon: Boxes,
    title: "SEO Services",
    description: "Anticipate market shifts and emerging trends to stay ahead of the curve."
  },
  {
    icon: Shield,
    title: "Market Research",
    description: "Our market research services are designed to provide maximum value."
  },
  {
    icon: Rocket,
    title: "Software Development",
    description: "We go beyond data collection to provide actionable insights."
  },
  {
    icon: Layers,
    title: "Affiliate Marketing",
    description: "We understand that every business is unique. That's why we offer."
  },
  {
    icon: Target,
    title: "Website Development",
    description: "In today's competitive market, timing is everything. Our efficient."
  }
]

export default function BusinessFeatures() {
  return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
          >
          <span className="text-blue-600 font-medium mb-4 block">
            SERVICES
          </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Build a customer - centric marketing strategy
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ligula risus auctor tempus magna feugit lacinia.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-6">
                    <feature.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}