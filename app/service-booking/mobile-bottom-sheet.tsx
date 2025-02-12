"use client"

import type React from "react"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

interface MobileBottomSheetProps {
  title: string
  description: string
  triggerText: string
  children: React.ReactNode
}

export function MobileBottomSheet({ title, description, triggerText, children }: MobileBottomSheetProps) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Button>{triggerText}</Button>
        </SheetTrigger>
        <SheetContent>
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            <p className="text-sm text-muted-foreground mb-4">{description}</p>
            {children}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

