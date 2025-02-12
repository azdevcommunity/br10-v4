"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import type { Service } from "@/types/service"
import { format, addMinutes } from "date-fns"
import { useTimelineWidth } from "./hooks/use-timeline-width"

interface MultiServiceSchedulingProps {
  selectedServices: Service[]
  onSchedulingComplete: (scheduledServices: ScheduledService[]) => void
}

interface ScheduledService extends Service {
  startTime: Date
  endTime: Date
}

export function MultiServiceScheduling({ selectedServices, onSchedulingComplete }: MultiServiceSchedulingProps) {
  const [schedulingType, setSchedulingType] = useState<"auto" | "manual">("auto")
  const [startTime, setStartTime] = useState<Date>(new Date(new Date().setHours(9, 0, 0, 0)))
  const [scheduledServices, setScheduledServices] = useState<ScheduledService[]>([])
  const timelineRef = useRef<HTMLDivElement>(null)
  const { hourWidth, calculatePosition, calculateWidth } = useTimelineWidth()

  const autoScheduleServices = useCallback(() => {
    let currentTime = new Date(startTime)
    const sortedServices = [...selectedServices].sort((a, b) => b.duration - a.duration)

    const scheduled = sortedServices.map((service) => {
      const scheduledService: ScheduledService = {
        ...service,
        startTime: new Date(currentTime),
        endTime: addMinutes(currentTime, service.duration),
      }
      currentTime = scheduledService.endTime
      return scheduledService
    })

    setScheduledServices(scheduled)
    onSchedulingComplete(scheduled)
  }, [selectedServices, startTime, onSchedulingComplete])

  const manualScheduleServices = useCallback(() => {
    const scheduled = selectedServices.map((service) => ({
      ...service,
      startTime: new Date(startTime),
      endTime: addMinutes(new Date(startTime), service.duration),
    }))
    setScheduledServices(scheduled)
    onSchedulingComplete(scheduled)
  }, [selectedServices, startTime, onSchedulingComplete])

  useEffect(() => {
    if (schedulingType === "auto") {
      autoScheduleServices()
    } else {
      manualScheduleServices()
    }
  }, [schedulingType, autoScheduleServices, manualScheduleServices])

  const handleTimeChange = (serviceId: number, newTime: string) => {
    const updatedServices = scheduledServices.map((service) => {
      if (service.id === serviceId) {
        const [hours, minutes] = newTime.split(":").map(Number)
        const newStartTime = new Date(startTime).setHours(hours, minutes, 0, 0)
        return {
          ...service,
          startTime: new Date(newStartTime),
          endTime: addMinutes(new Date(newStartTime), service.duration),
        }
      }
      return service
    })
    setScheduledServices(updatedServices)
    onSchedulingComplete(updatedServices)
  }

  const generateTimeOptions = () => {
    const options = []
    for (let i = 9; i <= 17; i++) {
      for (let j = 0; j < 60; j += 30) {
        options.push(format(new Date().setHours(i, j), "HH:mm"))
      }
    }
    return options
  }

  const isTimeUnavailable = (hour: number) => hour === 14

  return (
    <div className="space-y-4 md:space-y-6">
      <RadioGroup value={schedulingType} onValueChange={(value: "auto" | "manual") => setSchedulingType(value)}>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="auto" id="auto" />
            <Label htmlFor="auto">Auto-Scheduling</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="manual" id="manual" />
            <Label htmlFor="manual">Manual Scheduling</Label>
          </div>
        </div>
      </RadioGroup>

      {schedulingType === "auto" && (
        <div>
          <Label htmlFor="start-time">Start Time</Label>
          <Select
            value={format(startTime, "HH:mm")}
            onValueChange={(value) => {
              const [hours, minutes] = value.split(":").map(Number)
              setStartTime(new Date(new Date().setHours(hours, minutes, 0, 0)))
            }}
          >
            <SelectTrigger id="start-time">
              <SelectValue placeholder="Select start time" />
            </SelectTrigger>
            <SelectContent>
              {generateTimeOptions().map((time) => (
                <SelectItem key={time} value={time}>
                  {time}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Scheduled Services</h3>
          <div className="flex gap-2">
            <Badge variant="outline" className="bg-red-50">
              Unavailable
            </Badge>
            <Badge variant="outline" className="bg-blue-50">
              Selected Time
            </Badge>
          </div>
        </div>
        {scheduledServices.map((service) => (
          <div key={service.id} className="flex items-center justify-between p-2 border rounded">
            <span>
              {service.name} ({service.duration} min)
            </span>
            {schedulingType === "manual" ? (
              <Select
                value={format(service.startTime, "HH:mm")}
                onValueChange={(value) => handleTimeChange(service.id, value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  {generateTimeOptions().map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : (
              <span>
                {format(service.startTime, "HH:mm")} - {format(service.endTime, "HH:mm")}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 md:mt-6">
        <h3 className="text-lg font-semibold mb-2">Timeline Preview</h3>
        <ScrollArea className="w-full rounded-md border max-h-[290px] md:max-h-[400px]">
          <div className="p-10 md:px-10 md:py-7 lg:px-10 lg:py-7 max-sm:px-3 max-sm:py-5">
            <div ref={timelineRef} className="relative" style={{ minWidth: `${hourWidth * 5}px` }}>
              {/* Time scale */}
              <div className="absolute top-0 left-0 w-full flex">
                {Array.from({ length: 10 }, (_, i) => i + 9).map((hour) => (
                  <TooltipProvider key={hour}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div
                          className={`w-[1000px] md:w-[120px] h-8 md:h-12 border-l relative ${
                            isTimeUnavailable(hour) ? "bg-red-50" : ""
                          }`}
                        >
                          <span className="absolute -top-4 md:-top-6 left-1 md:left-2 text-[10px] md:text-xs text-gray-500">{`${hour}:00`}</span>
                          {isTimeUnavailable(hour) && (
                            <div className="absolute inset-0 flex items-center justify-center text-[8px] md:text-[10px] text-red-500 font-medium">
                              Unavailable
                            </div>
                          )}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        {isTimeUnavailable(hour)
                          ? "Provider unavailable during this hour"
                          : `Available for booking: ${hour}:00 - ${hour + 1}:00`}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>

              {/* Service blocks */}
              <div className="relative pt-10 md:pt-16">
                {scheduledServices.map((service, index) => {
                  const startHour = service.startTime.getHours() + service.startTime.getMinutes() / 60
                  const startPosition = calculatePosition(startHour - 9)
                  const width = calculateWidth(service.duration)

                  return (
                    <TooltipProvider key={service.id}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div
                            className="absolute h-6 md:h-10 rounded-md shadow-sm transition-all duration-200 hover:ring-2 hover:ring-offset-2 hover:ring-primary cursor-pointer bg-blue-100 border border-blue-200"
                            style={{
                              left: `${startPosition}px`,
                              width: `${width}px`,
                              top: `${index * 28}px`,
                            }}
                          >
                            <div className="h-full px-1 flex items-center justify-between overflow-hidden">
                              <span className="text-[8px] md:text-xs font-medium truncate">{service.name}</span>
                              <span className="text-[6px] md:text-[10px] whitespace-nowrap ml-1">
                                {format(service.startTime, "HH:mm")}
                              </span>
                            </div>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <div className="text-xs md:text-sm">
                            <p className="font-medium">{service.name}</p>
                            <p>Duration: {service.duration} minutes</p>
                            <p>Price: ${service.price}</p>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )
                })}
              </div>
            </div>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  )
}

