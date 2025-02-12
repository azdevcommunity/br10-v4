export const mockReservationDetail = {
  reservationId: 1,
  reservationDate: "2024-03-25T14:30:00",
  reservationStatus: 0,
  specialistName: "Əli Məmmədov",
  specialistId: 1,
  price: 75,
  services: [
    {
      id: 1,
      specialistUserId: 1,
      duration: 30,
      name: "Saç kəsimi",
      price: 40,
      description: "Kişi saç kəsimi xidməti",
      imageUrl: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      specialistUserId: 1,
      duration: 20,
      name: "Saqqal düzəltmə",
      price: 35,
      description: "Professional saqqal düzəltmə xidməti",
      imageUrl: "/placeholder.svg?height=80&width=80",
    },
  ],
} 