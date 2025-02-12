import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-6">
        <Search className="w-8 h-8 text-muted-foreground" />
      </div>
      <h3 className="text-2xl font-semibold mb-2">Hazırda rezervasiyanız yoxdur</h3>
      <p className="text-muted-foreground mb-6">Buradan rezervasiyalarınızı idarə edə bilərsiniz. Başlamaq üçün aşağıdakı düyməyə klikləyin!</p>
      <Button>
        <Calendar className="w-4 h-4 mr-2" />
        Rezervasiya Yarat
      </Button>
    </div>
  )
}

