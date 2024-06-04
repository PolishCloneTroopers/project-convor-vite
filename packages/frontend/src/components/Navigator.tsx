import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { NavLink, Outlet } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PCT_logo from "@/assets/PCT_logo.png"

export default function Navigator(){
    return (
        <>
        <header className="bg-slate-950 h-[100px]">
            <Avatar className="inline-block h-full w-1/1 float-left">
                <AvatarImage src={PCT_logo} alt="@shadcn" />
                <AvatarFallback>PCT</AvatarFallback>
            </Avatar>
            <NavigationMenu className="inline align-middle">
                <NavigationMenuList>
                    <NavigationMenuItem className={navigationMenuTriggerStyle()}>
                        <NavLink to="/"
                        className={({isActive})=>{
                            return isActive ? 'text-black-400 underline' : 'text-black';
                        }}>
                            <NavigationMenuLink>Hangar</NavigationMenuLink>
                        </NavLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className={navigationMenuTriggerStyle()}>
                        <NavLink to="/about"
                        className={({isActive})=>{
                            return isActive ? 'text-black-400 underline' : 'text-black';
                        }}>
                            <NavigationMenuLink>O nas</NavigationMenuLink>
                        </NavLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className={navigationMenuTriggerStyle()}>
                        <NavLink to="/members"
                        className={({isActive})=>{
                            return isActive ? 'text-black-400 underline' : 'text-black';
                        }}>
                            <NavigationMenuLink>Członkowie</NavigationMenuLink>
                        </NavLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className={navigationMenuTriggerStyle()}>
                        <NavLink to="/join"
                        className={({isActive})=>{
                            return isActive ? 'text-black-400 underline' : 'text-black';
                        }}>
                            <NavigationMenuLink>Dołącz do nas</NavigationMenuLink>
                        </NavLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
        <body>
            <Outlet />
        </body>
        </>
    )
}