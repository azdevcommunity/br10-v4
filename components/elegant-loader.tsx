"use client"

import { motion } from "framer-motion"

export const ElegantLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <motion.div
        className="w-12 h-1 bg-gray-300 rounded-full"
        animate={{
          scaleX: [1, 1.5, 1.5, 1, 1],
          scaleY: [1, 1, 2, 2, 1],
          backgroundColor: ["#D1D5DB", "#9CA3AF", "#6B7280", "#4B5563", "#D1D5DB"],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}

