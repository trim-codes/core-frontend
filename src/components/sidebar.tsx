
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from "../components/ui/sheet"
import { Input } from "../components/ui/input"
import { useMobileSidebar } from "../hooks/use-mobile-sidebar"

export const Sidebar = () => {
    const { isOpen, onClose } = useMobileSidebar();

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent>
                <div>

                </div>
            </SheetContent>
        </Sheet>

    )
}

