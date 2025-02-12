"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import type { Service } from "@/types/service"

interface ServicesOfferedProps {
  onServiceSelect: (service: Service) => void
  onServiceDetails: (service: Service) => void
  selectedServices: Service[]
}

export function ServicesOffered({ onServiceSelect, onServiceDetails, selectedServices }: ServicesOfferedProps) {
  const [activeCategory, setActiveCategory] = React.useState("All")

  const services: Service[] = [
    {
      id: 1,
      name: "Men's Haircut",
      duration: 30,
      price: 30,
      category: "Haircuts",
      description: "A classic men's haircut tailored to your style.",
      image: "/placeholder.svg?height=200&width=300&text=Men's+Haircut",
    },
    {
      id: 2,
      name: "Women's Haircut",
      duration: 45,
      price: 45,
      category: "Haircuts",
      description: "A stylish haircut designed for women, focusing on your unique features.",
      image: "/placeholder.svg?height=200&width=300&text=Women's+Haircut",
    },
    {
      id: 3,
      name: "Hair Coloring",
      duration: 90,
      price: 80,
      category: "Color",
      description: "Professional hair coloring services to enhance your natural beauty.",
      image: "/placeholder.svg?height=200&width=300&text=Hair+Coloring",
    },
    {
      id: 4,
      name: "Beard Trim",
      duration: 15,
      price: 15,
      category: "Grooming",
      description: "A precise beard trim to maintain a neat and stylish look.",
      image: "/placeholder.svg?height=200&width=300&text=Beard+Trim",
    },
    {
      id: 5,
      name: "Manicure",
      duration: 30,
      price: 25,
      category: "Nails",
      description: "A relaxing manicure to pamper your hands and nails.",
      image: "/placeholder.svg?height=200&width=300&text=Manicure",
    },
    {
      id: 6,
      name: "Pedicure",
      duration: 45,
      price: 35,
      category: "Nails",
      description: "A rejuvenating pedicure to care for your feet and nails.",
      image: "/placeholder.svg?height=200&width=300&text=Pedicure",
    },
  ]

  const categories = ["All", ...new Set(services.map((service) => service.category))]

  const filteredServices =
    activeCategory === "All" ? services : services.filter((service) => service.category === activeCategory)

  return (
    <div className="bg-card rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Services Offered</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="flex items-center space-x-2 p-2 sm:p-4 border rounded-md cursor-pointer hover:bg-accent"
            onClick={(e) => {
              e.preventDefault()
              onServiceDetails(service)
            }}
          >
            <Checkbox
              id={`service-${service.id}`}
              checked={selectedServices.some((s) => s.id === service.id)}
              onCheckedChange={() => onServiceSelect(service)}
              onClick={(e) => e.stopPropagation()}
            />
            <div className="flex-1 min-w-0">
              <label
                htmlFor={`service-${service.id}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 truncate"
              >
                {service.name}
              </label>
              <p className="text-xs text-muted-foreground truncate">
                {service.duration} min | ${service.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

