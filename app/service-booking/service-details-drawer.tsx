import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { Clock, DollarSign } from "lucide-react"
import type { Service } from "@/types/service"
import Image from 'next/image'

interface ServiceDetailsDrawerProps {
  service: Service | null
  isOpen: boolean
  onClose: () => void
  onSelect: (service: Service) => void
  selectedServices: Service[]
}

export function ServiceDetailsDrawer({
  service,
  isOpen,
  onClose,
  onSelect,
  selectedServices,
}: ServiceDetailsDrawerProps) {
  if (!service) return null

  return (
    <Drawer open={isOpen} onClose={onClose}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{service.name}</DrawerTitle>
          <DrawerDescription>{service.category}</DrawerDescription>
        </DrawerHeader>
        <div className="p-4 pb-0">
          <Image
            src={service.image || "/placeholder-service.svg"}
            alt={service.name}
            width={400}
            height={300}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
              <span className="text-sm">{service.duration} minutes</span>
            </div>
            <div className="flex items-center">
              <DollarSign className="w-4 h-4 mr-2 text-muted-foreground" />
              <span className="text-sm">${service.price}</span>
            </div>
          </div>
        </div>
        <DrawerFooter>
          <Button
            onClick={() => {
              onSelect(service)
              onClose()
            }}
          >
            {selectedServices.some((s) => s.id === service.id) ? "Unselect Service" : "Select Service"}
          </Button>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

