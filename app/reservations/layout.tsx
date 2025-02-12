import type React from "react"

export default function ReservationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <main className="">{children}</main>
    </div>
  )
}

