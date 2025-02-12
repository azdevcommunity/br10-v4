"use client"

import { useState, useEffect } from "react"
import ReservationDetail from "@/components/reservation-detail"
import { ElegantLoader } from "@/components/elegant-loader"
import axiosInstance from "@/utils/axios"
import { mockReservationDetail } from "./mock-data"
import { useRouter } from "next/navigation"

type ReservationDetailProps = {
  reservationId: number
  reservationDate: string
  reservationStatus: number
  specialistName: string
  specialistId: number
  price: number
  services: {
    id: number
    specialistUserId: number
    duration: number
    name: string
    price: number
    description: string
    imageUrl: string
  }[]
}

function ReservationDetailClient({ id }: { id: string }) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [reservation, setReservation] = useState<ReservationDetailProps | null>(null)

  useEffect(() => {
    const fetchReservationDetail = async () => {
      try {
        setLoading(true)
        if (process.env.NEXT_PUBLIC_USE_MOCK_DATA === "true") {
          setTimeout(() => {
            setReservation(mockReservationDetail)
            setLoading(false)
          }, 1000)
        } else {
          const response = await axiosInstance.get(`/customers/history/id?reservationId=${id}`)
          const data = response.data.data[0]
          if (!data) {
            router.push('/reservations/not-found')
            return
          }
          setReservation(data)
          setLoading(false)
        }
      } catch (error) {
        console.error("Rezervasiya detalları yüklənərkən xəta baş verdi:", error)
        setLoading(false)
        router.push('/reservations/not-found')
      }
    }

    fetchReservationDetail()
  }, [id, router])

  if (loading) {
    return <ElegantLoader />
  }

  if (!reservation) {
    router.push('/reservations/not-found')
    return null
  }

  return <ReservationDetail {...reservation} />
}

export default async function ReservationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  return <ReservationDetailClient id={resolvedParams.id} />
}

