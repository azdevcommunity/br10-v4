import { format, parseISO } from "date-fns"
import { ArrowLeft, Calendar, Clock, DollarSign, Edit2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

interface Service {
  id: number
  specialistUserId: number
  duration: number
  name: string
  price: number
  description: string
  imageUrl: string
}

interface ReservationDetailProps {
  reservationId: number
  reservationDate: string
  reservationStatus: number
  specialistName: string
  price: number
  services?: Service[]
}

const ReservationDetail: React.FC<ReservationDetailProps> = ({
  reservationId,
  reservationDate,
  reservationStatus,
  specialistName,
  price,
  services,
}) => {
  const formatDate = (dateString: string) => {
    try {
      const date = parseISO(dateString)
      return {
        date: format(date, "dd.MM.yyyy"),
        time: format(date, "HH:mm"),
      }
    } catch (error) {
      console.error("Error parsing date:", error)
      return {
        date: "Geçersiz tarih",
        time: "Geçersiz saat",
      }
    }
  }

  const formattedDateTime = formatDate(reservationDate)

  const getStatusBadge = (status: number) => {
    switch (status) {
      case 0:
        return <Badge className="bg-blue-500 hover:bg-blue-600">Gözlənilən</Badge>
      case 1:
        return <Badge className="bg-green-500 hover:bg-green-600">Tamamlanmış</Badge>
      case 2:
        return <Badge className="bg-red-500 hover:bg-red-600">Ləğv Edildi</Badge>
      default:
        return null
    }
  }

  return (
    <div className="container max-w-3xl mx-auto py-6 px-4">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/reservations">
          <Button variant="ghost" size="icon" className="hover:bg-accent">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Geri</span>
          </Button>
        </Link>
        <h1 className="text-2xl font-semibold">Rezervasiya Detalı</h1>
        {getStatusBadge(reservationStatus)}
      </div>

      <Card className="overflow-hidden">
        <CardHeader className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full overflow-hidden bg-muted">
              <Image
                src="/placeholder.svg?height=64&width=64"
                alt={specialistName}
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold">{specialistName}</h2>
              <div className="flex items-center gap-6 text-muted-foreground mt-1">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{formattedDateTime.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{formattedDateTime.time}</span>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Separator className="my-6" />

          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-4">Seçilmiş Xidmətlər</h3>
              <div className="space-y-4">
                {Array.isArray(services) && services?.length > 0 ? (
                  services.map((service) => (
                    <div key={service.id} className="flex items-start gap-4 p-4 rounded-lg bg-accent/50">
                      <div className="h-20 w-20 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                        <Image
                          src={service.imageUrl || "/placeholder.svg"}
                          alt={service.name}
                          width={80}
                          height={80}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{service.name}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="text-sm text-muted-foreground">{service.duration} dəqiqə</span>
                          <span className="font-medium">${service.price}</span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-muted-foreground">Seçilmiş xidmət yoxdur.</p>
                )}
              </div>
            </div>

            <Separator />

            <div className="flex items-center justify-between pt-2">
              <span className="font-medium text-lg">Ümumi Məbləğ</span>
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                <span className="text-2xl font-semibold">{price}</span>
              </div>
            </div>

            {reservationStatus === 0 && (
              <div className="grid grid-cols-2 gap-4 mt-4">
                <Button
                  variant="default"
                  className="w-full text-xs sm:text-sm flex items-center justify-center px-2 py-3"
                  onClick={() => (window.location.href = `/reservations/${reservationId}/edit`)}
                >
                  <Edit2 className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                  <span>Düzəliş Et</span>
                </Button>
                <Button
                  variant="destructive"
                  className="w-full text-xs sm:text-sm flex items-center justify-center px-2 py-3"
                >
                  Ləğv Et
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ReservationDetail

