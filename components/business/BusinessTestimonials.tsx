'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    businessName: "City Salon & Spa",
    ownerName: "Sarah Johnson",
    logo: "/placeholder.svg",
    text: "BR10 has transformed how we manage our salon. The booking system is intuitive, and our clients love the easy scheduling process. The analytics help us make better business decisions.",
  },
  {
    businessName: "Elite Fitness Center",
    ownerName: "Michael Chen",
    logo: "/placeholder.svg",
    text: "Managing multiple trainers and classes was a challenge before BR10. Now everything runs smoothly, and we've seen a 40% increase in class bookings since implementing the system.",
  },
  {
    businessName: "Dental Care Plus",
    ownerName: "Dr. Emily Rodriguez",
    logo: "/placeholder.svg",
    text: "The automated reminders have significantly reduced no-shows, and the patient feedback system helps us maintain our high standards. BR10 is an essential part of our practice.",
  },
  {
    businessName: "Auto Service Pro",
    ownerName: "James Wilson",
    logo: "/placeholder.svg",
    text: "BR10's scheduling system has streamlined our operations completely. We can now manage our appointments more efficiently, and our customers appreciate the transparent booking process.",
  },
]

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const TestimonialCard = ({ testimonial, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">
            {testimonial.businessName}
          </h3>
          <p className="text-gray-500">{testimonial.ownerName}</p>
        </div>
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100">
          <Image
              src={testimonial.logo}
              alt={`${testimonial.businessName} logo`}
              fill
              className="object-cover"
          />
        </div>
      </div>
      <p className="text-gray-600 leading-relaxed">
        {testimonial.text}
      </p>
    </motion.div>
)

export default function BusinessTestimonials() {
  return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Business Owners Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of businesses that trust BR10 for their booking needs
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
                <TestimonialCard
                    key={testimonial.businessName}
                    testimonial={testimonial}
                    index={index}
                />
            ))}
          </div>
        </div>
      </section>
  )
}

