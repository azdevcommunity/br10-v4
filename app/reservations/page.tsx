"use client"

import { useState, useEffect } from "react"
import { Calendar, Clock, DollarSign } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import axiosInstance from "@/utils/axios"
import { ElegantLoader } from "@/components/elegant-loader"
import { mockReservations } from "./mock-data"
import { useRouter } from "next/navigation"
import { EmptyState } from "@/components/empty-state"

type Reservation = {
  reservationId: number
  reservationDate: string
  reservationStatus: number // 0: upcoming, 1: completed, 2: cancelled gibi
  specialistName: string
  specialistId: number
  services: string
  price: number
}

// Yeni tip tanımı ekleyelim
type ReservationCardProps = {
  id: string
  barber: {
    name: string
    image: string
  }
  service: string
  date: string
  time: string
  price: number
  status: "upcoming" | "completed" | "cancelled"
}

export default function ReservationsPage() {
  const [activeTab, setActiveTab] = useState("upcoming")
  const [reservations, setReservations] = useState<Reservation[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        setLoading(true)
        // process.env.NEXT_PUBLIC_USE_MOCK_DATA environment variable'ını kontrol et
        if (process.env.NEXT_PUBLIC_USE_MOCK_DATA === "true") {
          // Mock veri kullan
          setTimeout(() => {
            setReservations(mockReservations)
            setLoading(false)
          }, 1000) // Gerçekçi bir yükleme deneyimi için 1 saniyelik gecikme
        } else {
          // Gerçek API'yi kullan
          const response = await axiosInstance.get("/customers/history")
          setReservations(response.data.data || [])
          setLoading(false)
        }
      } catch (error) {
        console.error("Rezervasiyalar yüklənərkən xəta baş verdi:", error)
        setLoading(false)
      }
    }

    fetchReservations()
  }, [])

  const getStatusFromNumber = (status: number): "upcoming" | "completed" | "cancelled" => {
    switch (status) {
      case 0:
        return "upcoming"
      case 1:
        return "completed"
      case 2:
        return "cancelled"
      default:
        return "upcoming"
    }
  }

  const filteredReservations = reservations
    .map(res => ({
      id: res.reservationId.toString(),
      barber: {
        name: res.specialistName,
        image: "/placeholder.svg?height=40&width=40",
      },
      service: res.services,
      date: new Date(res.reservationDate).toLocaleDateString("tr-TR"),
      time: new Date(res.reservationDate).toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" }),
      price: res.price,
      status: getStatusFromNumber(res.reservationStatus)
    }))
    .filter((res) => res.status === activeTab)

  if (loading) {
    return <ElegantLoader />
  }

  return (
    <div className="container mx-auto p-4 max-w-2xl min-h-screen">
      <h1 className="text-3xl font-bold mt-8 mb-6 text-center">Rezervasiyalarım</h1>
      <Tabs defaultValue="upcoming" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="upcoming">Gözlənilən</TabsTrigger>
          <TabsTrigger value="completed">Tamamlanmış</TabsTrigger>
          <TabsTrigger value="cancelled">Ləğv Edildi</TabsTrigger>
        </TabsList>
        <TabsContent value={activeTab} className="mt-6">
          {filteredReservations.length === 0 ? (
            <EmptyState />
          ) : (
            filteredReservations.map((reservation) => (
              <ReservationCard key={reservation.id} reservation={reservation} />
            ))
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

// ReservationCard bileşeninin prop tipini güncelleyelim
function ReservationCard({ reservation }: { reservation: ReservationCardProps }) {
  const router = useRouter()
  const statusColors = {
    upcoming: "bg-blue-100 text-blue-700 border-blue-200",
    completed: "bg-green-100 text-green-700 border-green-200",
    cancelled: "bg-red-100 text-red-700 border-red-200",
  }

  return (
    <Card 
      className="mb-4 border rounded-lg transition-colors duration-200 hover:bg-accent/5 cursor-pointer" 
      onClick={() => router.push(`/reservations/${reservation.id}`)}
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10 border">
              <AvatarImage src={reservation.barber.image} alt={reservation.barber.name} />
              <AvatarFallback>{reservation.barber.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium">{reservation.barber.name}</h3>
              <p className="text-sm text-muted-foreground">{reservation.service}</p>
            </div>
          </div>
          <Badge className={`${statusColors[reservation.status]} border px-2.5 py-0.5 text-xs font-medium`}>
            {reservation.status}
          </Badge>
        </div>
        <div className="grid grid-cols-3 gap-4 text-sm border-t pt-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span>{reservation.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span>{reservation.time}</span>
          </div>
          <div className="flex items-center gap-2 justify-end">
            <DollarSign className="w-4 h-4 text-muted-foreground" />
            <span className="font-medium">{reservation.price}</span>
          </div>
        </div>
      </div>
    </Card>
  )
}

