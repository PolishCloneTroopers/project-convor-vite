import { NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { navigationMenuTextStyle } from "@/styles/tailwind-styles";
import { NavLink } from "react-router-dom";

export function NavMenuList(){
    return(
        <NavigationMenuList className="flex-col md:flex-row">
            <NavigationMenuItem className={navigationMenuTextStyle()}>
                <NavLink to="/"
                className={({isActive})=>{
                    return isActive ? 'underline' : '';
                }}>
                    Hangar
                </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem className={navigationMenuTextStyle()}>
                <NavLink to="/about"
                className={({isActive})=>{
                    return isActive ? 'underline' : '';
                }}>
                    O nas
                </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem className={navigationMenuTextStyle()}>
                <NavLink to="/members"
                className={({isActive})=>{
                    return isActive ? 'underline' : '';
                }}>
                    Członkowie
                </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem className={navigationMenuTextStyle()}>
                <NavLink to="https://discord.com/invite/WS56DPexDK"
                className={({isActive})=>{
                    return isActive ? 'underline' : '';
                }}>
                    Dołącz do nas
                </NavLink>
            </NavigationMenuItem>
        </NavigationMenuList>
    )
}