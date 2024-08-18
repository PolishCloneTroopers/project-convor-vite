import { MenuIcon } from "lucide-react"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "./ui/navigation-menu"
import { NavLink, useLocation } from "react-router-dom"
import { navigationMenuTextStyle } from "@/styles/tailwind-styles"
import { Credits } from "./credits"

export function MenuToggle() {
    const location = useLocation()

    return (

    <Sheet>
    <SheetTrigger>
        <Button variant="outline" size="icon">
            <MenuIcon/>
            <span className="sr-only">Show menu</span>
        </Button>
    </SheetTrigger>
    <SheetContent side="right">
        <SheetHeader>
        <SheetTitle className="text-muted-foreground">Nawigacja</SheetTitle>
        <SheetDescription className="conent-center text-primary">
            <NavigationMenu className="inline">
                <NavigationMenuList className="flex-col">
                    <NavigationMenuItem className={navigationMenuTextStyle()}>
                        <SheetClose asChild>
                            <NavLink to="/" className={location.pathname=="/" ? 'underline' : ''}>
                                Hangar
                            </NavLink>
                        </SheetClose>
                    </NavigationMenuItem>
                    <NavigationMenuItem className={navigationMenuTextStyle()}>
                        <SheetClose asChild>
                            <NavLink to="/about" className={location.pathname=="/about" ? 'underline' : ''}>
                                O nas
                            </NavLink>
                        </SheetClose>
                    </NavigationMenuItem>
                    <NavigationMenuItem className={navigationMenuTextStyle()}>
                        <SheetClose asChild>
                            <NavLink to="/members" className={location.pathname=="/members" ? 'underline' : ''}>
                                Członkowie
                            </NavLink>
                        </SheetClose>
                    </NavigationMenuItem>
                    <NavigationMenuItem className={navigationMenuTextStyle()}>
                        <SheetClose asChild>
                            <NavLink to="https://discord.com/invite/WS56DPexDK" className={location.pathname=="/join" ? 'underline' : ''}>
                                Dołącz do nas
                            </NavLink>
                        </SheetClose>
                    </NavigationMenuItem>
                    <NavigationMenuItem className={navigationMenuTextStyle()}>
                        <SheetClose asChild>
                            <Credits/>
                        </SheetClose>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </SheetDescription>
        </SheetHeader>
    </SheetContent>
    </Sheet>
        
  )
}
