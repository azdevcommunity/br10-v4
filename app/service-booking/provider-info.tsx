"use client"

import { useState } from "react"
import { MapPin, Clock, Phone, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { FullScreenCarousel } from "./full-screen-carousel"
import Image from 'next/image'

export function ProviderInfo() {
  const [isFullScreenOpen, setIsFullScreenOpen] = useState(false)
  const [fullScreenInitialIndex, setFullScreenInitialIndex] = useState(0)

  const galleryImages = [
    "/placeholder.svg?height=200&width=300&text=Work+Sample+1",
    "/placeholder.svg?height=200&width=300&text=Work+Sample+2",
    "/placeholder.svg?height=200&width=300&text=Work+Sample+3",
    "/placeholder.svg?height=200&width=300&text=Work+Sample+4",
    "/placeholder.svg?height=200&width=300&text=Work+Sample+5",
  ]

  const openFullScreenCarousel = (index: number) => {
    setFullScreenInitialIndex(index)
    setIsFullScreenOpen(true)
  }

  return (
    <div className="bg-card rounded-lg shadow-md p-6">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
        <Image
          src="/placeholder.svg?height=100&width=100"
          alt="Business Logo"
          width={100}
          height={100}
          className="w-24 h-24 rounded-full object-cover"
        />
        <div className="flex-1">
          <h1 className="text-2xl font-bold">Stellar Styles Salon</h1>
          <p className="text-muted-foreground mt-2">
            Experience luxury hair care and styling in our modern, welcoming salon.
          </p>
          <div className="mt-4 space-y-2">
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2 text-primary" />
              <span>Open: 9:00 AM - 7:00 PM</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-primary" />
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                123 Style Street, Fashion City
              </a>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2 text-primary" />
              <a href="tel:+1234567890" className="text-primary hover:underline">
                (123) 456-7890
              </a>
            </div>
          </div>
          <div className="mt-4 flex space-x-4">
            <Button variant="outline" size="icon">
              <Instagram className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Facebook className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Gallery</h2>
        <div className="relative">
          <Carousel>
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Work Sample ${index + 1}`}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover rounded-md cursor-pointer"
                      onClick={() => openFullScreenCarousel(index)}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      </div>
      <FullScreenCarousel
        images={galleryImages}
        initialIndex={fullScreenInitialIndex}
        isOpen={isFullScreenOpen}
        onClose={() => setIsFullScreenOpen(false)}
      />
    </div>
  )
}

