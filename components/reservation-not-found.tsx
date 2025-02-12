"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Home, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface ReservationNotFoundProps {
  onSearch?: () => void
}

export function ReservationNotFound({ onSearch }: ReservationNotFoundProps) {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="pt-12 pb-8 px-6">
          <div className="text-center">
            <div className="rounded-full bg-muted w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Search className="h-10 w-10 text-muted-foreground" />
            </div>

            <h1 className="text-2xl font-semibold mb-2 text-foreground">Rezervasiya tapılmadı</h1>

            <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
            Axtardığınız rezervasiya sistemimizdə tapılmadı. Rezervasiya nömrənizi yoxlayaraq yenidən cəhd edə və ya yeni axtarış edə bilərsiniz.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="outline" onClick={onSearch} className="gap-2">
                <Search className="h-4 w-4" />
                Yeni Axtarış
              </Button>

              <Button asChild className="gap-2">
                <Link href="/">
                  <Home className="h-4 w-4" />
                  Ana Səhifə
                </Link>
              </Button>
            </div>

            <Button variant="link" asChild className="mt-8 gap-2">
              <Link href="/reservations">
                <ArrowLeft className="h-4 w-4" />
                Bütün rezervasiyalarım
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 text-center space-y-2 text-sm text-muted-foreground">
        <p>Köməyə ehtiyacınız var?</p>
        <p>
        Müştəri xidmətlərimizlə{" "}
          <Button variant="link" asChild className="p-0 h-auto font-normal">
            <Link href="/contact">əlaqə saxlaya bilərsiniz.</Link>
          </Button>
        </p>
      </div>
    </div>
  )
}

