import { NavLink, Outlet } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/mode-toggle";
import PCT_logo_darkside from "@/assets/PCT_logo_transparent_white.png"
import PCT_logo_lightside from "@/assets/PCT_logo_transparent_black.png"
import { Navbar } from "@/components/navbar";
import { MenuToggle } from "@/components/menu-toggle";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
export default function Navigator(){

    
    return (
        <>
        <StarsBackground className="hidden dark:block" starDensity={0.00075}/>
        <ShootingStars className="hidden dark:block" starHeight={1} starWidth={10} trailColor="#2EB9DF" starColor="#9EAAFF"/>
        <div className="absolute top-0 left-0 -z-10 h-[100vh] w-[100vw] bg-kamino dark:bg-black dark:bg-blend-darken bg-cover bg-center" />
        <header className="relative bg-background flex w-full h-[8vh] items-center justify-between p-1">
            
            <NavLink id="avatar-container" className="align-middle size-[6vh]" to="/">
                <Avatar className="block dark:hidden size-[6vh]">
                    <AvatarImage src={PCT_logo_lightside} alt="PCT Logo"/>
                    <AvatarFallback>PCT</AvatarFallback>
                </Avatar>
                <Avatar className="hidden dark:block size-[6vh]">
                    <AvatarImage src={PCT_logo_darkside} alt="PCT Logo"/>
                    <AvatarFallback>PCT</AvatarFallback>
                </Avatar>
            </NavLink>
            
            <span className="hidden md:inline-flex">
                <Navbar />
            </span>


            <div id="toggle-container" className="inline-flex align-middle">
                <span className="m-1"><ModeToggle/></span>
                <span className="inline-flex md:hidden m-1"><MenuToggle/></span>
            </div>

        </header>
        
        <span className="relative h-[92vh] z-0"><Outlet /></span>
        

        </>
    )
}