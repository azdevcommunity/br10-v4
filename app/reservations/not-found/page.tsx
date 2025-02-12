"use client"

import { ReservationNotFound } from "@/components/reservation-not-found"

export default function ReservationNotFoundPage() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <ReservationNotFound
        onSearch={() => {
          console.log("Search clicked")
          // Burada arama sayfasına yönlendirme yapılabilir
        }}
      />
    </div>
  )
}

