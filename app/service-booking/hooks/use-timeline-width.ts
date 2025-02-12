"use client"

import { useState, useEffect } from "react"

export function useTimelineWidth() {
  const [hourWidth, setHourWidth] = useState(60)

  useEffect(() => {
    const updateWidth = () => {
      setHourWidth(window.innerWidth >= 768 ? 120 : 60)
    }

    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  const calculatePosition = (hour: number) => hour * hourWidth
  const calculateWidth = (duration: number) => (duration / 60) * hourWidth

  return {
    hourWidth,
    calculatePosition,
    calculateWidth,
  }
}

