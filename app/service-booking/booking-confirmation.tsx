import { Button } from "@/components/ui/button"
import type { Service } from "@/types/service"

interface BookingConfirmationProps {
  selectedServices: Service[]
  selectedDate: Date | undefined
  selectedTime: string | null
  onConfirm: () => void
  isConfirmationEnabled: boolean
}

export function BookingConfirmation({
  selectedServices,
  selectedDate,
  selectedTime,
  onConfirm,
  isConfirmationEnabled,
}: BookingConfirmationProps) {
  const totalPrice = selectedServices.reduce((sum, service) => sum + service.price, 0)
  const totalDuration = selectedServices.reduce((sum, service) => sum + service.duration, 0)

  return (
    <div className="bg-card rounded-lg shadow-md p-4 sm:p-6">
      <h2 className="text-2xl font-bold mb-4">Booking Summary</h2>
      <div className="space-y-2 sm:space-y-4">
        {selectedServices.map((service) => (
          <div key={service.id} className="flex justify-between text-sm">
            <span className="truncate mr-2">{service.name}</span>
            <span className="flex-shrink-0">${service.price}</span>
          </div>
        ))}
        <div className="border-t pt-2 sm:pt-4">
          <div className="flex justify-between font-semibold text-sm sm:text-base">
            <span>Total Price:</span>
            <span>${totalPrice}</span>
          </div>
          <div className="flex justify-between text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">
            <span>Estimated Duration:</span>
            <span>{totalDuration} minutes</span>
          </div>
        </div>
      </div>
      {selectedDate && selectedTime && (
        <div className="border-t pt-2 sm:pt-4 mt-2 sm:mt-4">
          <div className="flex justify-between font-semibold text-sm sm:text-base">
            <span>Appointment:</span>
            <span className="text-right">
              {selectedDate.toLocaleDateString()} <br className="sm:hidden" />
              at {selectedTime}
            </span>
          </div>
        </div>
      )}
      <Button onClick={onConfirm} className="w-full mt-6" disabled={!isConfirmationEnabled}>
        Confirm Booking
      </Button>
    </div>
  )
}

