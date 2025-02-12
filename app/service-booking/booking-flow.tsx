"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { MultiServiceScheduling } from "./multi-service-scheduling"
import type { Service } from "@/types/service"

interface BookingFlowProps {
  selectedServices: Service[]
  selectedDate: Date | undefined
  selectedTime: string | null
  onDateChange: (date: Date | undefined) => void
  onTimeChange: (time: string | null) => void
}

export function BookingFlow({
  selectedServices,
  selectedDate,
  selectedTime,
  onDateChange,
  onTimeChange,
}: BookingFlowProps) {
  const [currentDate] = useState(new Date())
  const [] = useState<Service[]>([])

  // Define the service provider's working hours
  const workingHours = {
    start: 9, // 9 AM
    end: 18, // 6 PM
    unavailableTimes: [14], // 2 PM is unavailable
  }

  // Generate available time slots
  const generateTimeSlots = () => {
    const slots = []
    for (let hour = workingHours.start; hour < workingHours.end; hour++) {
      if (!workingHours.unavailableTimes.includes(hour)) {
        slots.push(`${hour.toString().padStart(2, "0")}:00`)
      }
    }
    return slots
  }

  const availableTimes = generateTimeSlots()

  const handleSchedulingComplete = () => {
    // You might want to pass this information up to the parent component
    // or update the global state with the scheduled services
  }

  return (
    <div className="bg-card rounded-lg shadow-md p-4 md:p-6">
      <h2 className="text-2xl font-bold mb-4">Choose Date and Time</h2>
      <div className="space-y-4 md:space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Select Date</h3>
          <div className="flex justify-center md:justify-start">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={onDateChange}
              className="rounded-md border max-w-full"
              disabled={(date) => date < currentDate || date.getDay() === 0 || date.getDay() === 6}
            />
          </div>
        </div>
        {selectedServices.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Schedule Services</h3>
            <MultiServiceScheduling
              selectedServices={selectedServices}
              onSchedulingComplete={handleSchedulingComplete}
            />
          </div>
        )}
        {selectedServices.length <= 1 && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Available Times</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
              {availableTimes.map((time) => (
                <Button
                  key={time}
                  variant={selectedTime === time ? "default" : "outline"}
                  onClick={() => onTimeChange(time)}
                  className="w-full"
                >
                  {time}
                </Button>
              ))}
            </div>
          </div>
        )}
        <div className="text-sm text-muted-foreground">
          <p>
            Working hours: {workingHours.start}:00 AM - {workingHours.end}:00 PM
          </p>
          <p>
            Note: The service provider is unavailable at{" "}
            {workingHours.unavailableTimes.map((hour) => `${hour}:00`).join(", ")}.
          </p>
        </div>
      </div>
    </div>
  )
}

