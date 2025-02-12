"use client"

import React, { useRef } from "react"
import { ProviderInfo } from "./provider-info"
import { ServicesOffered } from "./services-offered"
import { BookingFlow } from "./booking-flow"
import { BookingConfirmation } from "./booking-confirmation"
import { ServiceDetailsDrawer } from "./service-details-drawer"
import { Button } from "@/components/ui/button"
import type { Service } from "@/types/service"

export default function ServiceBooking() {
  const [selectedServices, setSelectedServices] = React.useState<Service[]>([])
  const [selectedServiceForDetails, setSelectedServiceForDetails] = React.useState<Service | null>(null)
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = React.useState<string | null>(null)
  const [bookingStep, setBookingStep] = React.useState<"services" | "datetime">("services")

  const dateTimeRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)

  const handleServiceSelection = (service: Service) => {
    setSelectedServices((prev) =>
      prev.some((s) => s.id === service.id) ? prev.filter((s) => s.id !== service.id) : [...prev, service],
    )
  }

  const handleServiceDetails = (service: Service) => {
    setSelectedServiceForDetails(service)
  }

  const handleCloseServiceDetails = () => {
    setSelectedServiceForDetails(null)
  }

  const handleBookingConfirmation = () => {
    console.log("Booking confirmed:", selectedServices, selectedDate, selectedTime)
  }

  const canProceedToDateTime = selectedServices.length > 0
  const canConfirmBooking = Boolean(selectedDate && selectedTime)

  const handleProceedToDateTime = () => {
    setBookingStep("datetime")
    setTimeout(() => {
      dateTimeRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  const handleBackToServices = () => {
    setBookingStep("services")
    setTimeout(() => {
      servicesRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ProviderInfo />
      <div className="mt-8 flex flex-col lg:flex-row xl:flex-col gap-8">
        <div className="flex-grow">
          {bookingStep === "services" ? (
            <div ref={servicesRef}>
              <ServicesOffered
                onServiceSelect={handleServiceSelection}
                onServiceDetails={handleServiceDetails}
                selectedServices={selectedServices}
              />
            </div>
          ) : (
            <div ref={dateTimeRef}>
              <BookingFlow
                selectedServices={selectedServices}
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                onDateChange={setSelectedDate}
                onTimeChange={setSelectedTime}
              />
            </div>
          )}
        </div>
        <div className="w-full lg:w-80 flex-shrink-0">
          <BookingConfirmation
            selectedServices={selectedServices}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            onConfirm={handleBookingConfirmation}
            isConfirmationEnabled={canConfirmBooking}
          />
          {bookingStep === "services" ? (
            <Button
              onClick={handleProceedToDateTime}
              className="w-full mt-4 px-2 py-2 text-sm sm:text-base"
              disabled={!canProceedToDateTime}
            >
              Proceed to Date & Time Selection
            </Button>
          ) : (
            <Button
              onClick={handleBackToServices}
              variant="outline"
              className="w-full mt-4 px-2 py-2 text-sm sm:text-base"
            >
              Back to Services
            </Button>
          )}
        </div>
      </div>
      <ServiceDetailsDrawer
        service={selectedServiceForDetails}
        isOpen={!!selectedServiceForDetails}
        onClose={handleCloseServiceDetails}
        onSelect={handleServiceSelection}
        selectedServices={selectedServices}
      />
    </div>
  )
}

