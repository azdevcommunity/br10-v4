import BookingConfirmation from "./booking-confirmation"

export default function Page() {
  const bookingDetails = {
    title: "Haircut Service with John's Barbershop",
    date: "Friday, February 7, 2025",
    time: "10:00 AM - 10:15 AM (Local Time)",
    host: {
      name: "John's Barbershop",
      email: "appointments@johnsbarbershop.com",
    },
    client: {
      name: "Alex Johnson",
      email: "alex.johnson@example.com",
    },
    location: "Video Call",
    price: "30",
    service: "Haircut"
  }

  return <BookingConfirmation bookingDetails={bookingDetails} />
}

