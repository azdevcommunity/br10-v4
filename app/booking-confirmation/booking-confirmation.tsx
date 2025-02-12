"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Calendar, CheckCircle, ExternalLink, Loader2 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface BookingConfirmationProps {
  bookingDetails: {
    title: string
    date: string
    time: string
    host: {
      name: string
      email: string
    }
    client: {
      name: string
      email: string
    }
    location: string
    price: string
    service: string
  }
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}
export default function BookingConfirmation({ bookingDetails }: BookingConfirmationProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleAddToCalendar = () => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => setIsLoading(false), 1500)
  }

  return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 p-4 md:p-8 lg:p-12">
        <div className="fixed inset-0 -z-10 background-mesh" />

        <motion.div initial="initial" animate="animate" exit="exit" variants={fadeIn} transition={{ duration: 0.5 }}>
          <Link
              href="/bookings"
              className="group inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to bookings
          </Link>

          <Card className="mx-auto max-w-2xl backdrop-blur-sm bg-card/95 border-muted/20 shadow-2xl">
            <CardHeader className="text-center pb-6">
              <motion.div className="mx-auto mb-4" initial="hidden" animate="visible">
                <motion.div
                    className="relative h-16 w-16 mx-auto"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.3,
                    }}
                >
                  <div className="absolute inset-0 rounded-full bg-green-500/10 animate-ping" />
                  <CheckCircle className="h-16 w-16 text-green-600 relative z-10" />
                </motion.div>
              </motion.div>
              <motion.h1
                  className="text-3xl font-bold tracking-tight bg-gradient-to-r from-green-500/80 to-green-700/90 bg-clip-text text-transparent"
                  variants={fadeIn}
                  transition={{ delay: 0.2 }}
              >
                Booking Confirmed
              </motion.h1>
              <motion.p className="text-sm text-muted-foreground mt-2" variants={fadeIn} transition={{ delay: 0.3 }}>
                We&apos;ve sent a calendar invitation with all the details to everyone.
              </motion.p>
            </CardHeader>

            <CardContent className="space-y-6">
              <motion.div
                  className="rounded-lg border bg-card/50 backdrop-blur-sm p-6 space-y-6 hover:bg-card/60 transition-colors"
                  variants={fadeIn}
                  transition={{ delay: 0.4 }}
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="space-y-2">
                    <p className="text-sm font-medium">What</p>
                    <div className="space-y-1">
                      <p className="font-semibold">{bookingDetails.service}</p>
                      <p className="text-sm text-muted-foreground">{bookingDetails.title}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">When</p>
                    <div className="space-y-1">
                      <p className="font-semibold">{bookingDetails.date}</p>
                      <p className="text-sm text-muted-foreground">{bookingDetails.time}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Price</p>
                    <p className="font-semibold">{bookingDetails.price}</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Where</p>
                    <p className="font-semibold inline-flex items-center">
                      {bookingDetails.location}
                      {bookingDetails.location.toLowerCase() === "video call" && (
                          <ExternalLink className="ml-1 h-3 w-3" />
                      )}
                    </p>
                  </div>
                </div>

                <Separator className="bg-primary/10" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                      className="space-y-2 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <p className="text-sm font-medium">Host</p>
                    <p className="font-semibold">{bookingDetails.host.name}</p>
                    <p className="text-sm text-muted-foreground">{bookingDetails.host.email}</p>
                  </motion.div>

                  <motion.div
                      className="space-y-2 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <p className="text-sm font-medium">Client</p>
                    <p className="font-semibold">{bookingDetails.client.name}</p>
                    <p className="text-sm text-muted-foreground">{bookingDetails.client.email}</p>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div className="flex items-center justify-between" variants={fadeIn} transition={{ delay: 0.5 }}>
                <p className="text-sm text-muted-foreground">Need to make a change?</p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button variant="outline" size="sm" className="hover:border-primary/50 transition-colors">
                    Reschedule
                  </Button>
                  <Button variant="destructive" size="sm" className="hover:bg-destructive/90 transition-colors">
                    Cancel
                  </Button>
                </div>
              </motion.div>
            </CardContent>

            <CardFooter className="flex flex-col space-y-4">
              <motion.div className="flex justify-center space-x-2 w-full" variants={fadeIn} transition={{ delay: 0.6 }}>
                <Button
                    variant="outline"
                    className="relative overflow-hidden group hover:border-primary/50 transition-colors"
                    onClick={handleAddToCalendar}
                    disabled={isLoading}
                >
                  {isLoading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                      <Calendar className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                  )}
                  Add to calendar
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary/50 to-primary origin-left scale-x-0 transition-transform group-hover:scale-x-100" />
                </Button>
              </motion.div>

              <motion.div variants={fadeIn} transition={{ delay: 0.7 }}>
                <Alert variant="default" className="mt-4 border-primary/20 bg-primary/5">
                  <AlertDescription className="flex items-center justify-between">
                    <span>Google&apos;s new spam policy could prevent you from receiving notifications.</span>
                    <Button variant="link" className="h-auto p-0 hover:text-primary/80">
                      Resolve
                    </Button>
                  </AlertDescription>
                </Alert>
              </motion.div>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
  )
}

