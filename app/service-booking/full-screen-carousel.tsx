"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { X } from "lucide-react"
import Image from 'next/image'

interface FullScreenCarouselProps {
  images: string[]
  initialIndex: number
  isOpen: boolean
  onClose: () => void
}

export function FullScreenCarousel({ images, initialIndex, isOpen, onClose }: FullScreenCarouselProps) {
  const [, setCurrentIndex] = useState(initialIndex)

  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] p-0">
        <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 z-50 rounded-full bg-background/80 text-foreground"
        >
          <X className="h-4 w-4" />
        </Button>
        <div className="relative w-full h-full">
          <Carousel className="w-full h-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="flex items-center justify-center h-[calc(95vh-2rem)]">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Gallery image ${index + 1}`}
                      className="max-w-full max-h-full object-contain"
                      width={800}
                      height={600}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 text-foreground" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 text-foreground" />
          </Carousel>
        </div>
      </DialogContent>
    </Dialog>
  )
}

