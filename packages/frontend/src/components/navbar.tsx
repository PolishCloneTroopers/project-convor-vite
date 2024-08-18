import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { navigationMenuTextStyle } from "@/styles/tailwind-styles";
import { NavLink } from "react-router-dom";

export function Navbar(){
    return(
        <NavigationMenu>
            <NavigationMenuList className="flex-col md:flex-row">
                <NavLink to="/" className={({isActive})=>{return isActive ? 'underline' : '';}}>
                    <NavigationMenuItem className={navigationMenuTextStyle()}>
                        Hangar
                    </NavigationMenuItem>
                </NavLink>
                <NavLink to="/about" className={({isActive})=>{return isActive ? 'underline' : '';}}>
                    <NavigationMenuItem className={navigationMenuTextStyle()}>
                        O nas
                    </NavigationMenuItem>
                </NavLink>
                <NavLink to="/members" className={({isActive})=>{return isActive ? 'underline' : '';}}>
                    <NavigationMenuItem className={navigationMenuTextStyle()}>
                        Członkowie
                    </NavigationMenuItem>
                </NavLink>
                <NavLink to="https://discord.com/invite/WS56DPexDK" className={({isActive})=>{return isActive ? 'underline' : '';}}>
                    <NavigationMenuItem className={navigationMenuTextStyle()}>
                        Dołącz do nas
                    </NavigationMenuItem>
                </NavLink>
            </NavigationMenuList>
        </NavigationMenu>
    )
}