import { Outlet } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/mode-toggle";
import PCT_logo_darkside from "@/assets/PCT_logo_transparent_white.png"
import PCT_logo_lightside from "@/assets/PCT_logo_transparent_black.png"
import { Navbar } from "@/components/navbar";
import { MenuToggle } from "@/components/menu-toggle";

export default function Navigator(){

    
    return (
        <>
        <div className="absolute top-0 left-0 -z-10 h-[100vh] w-[100vw] bg-kamino dark:bg-space dark:bg-blend-darken bg-cover bg-center" />
        <header className="relative bg-background flex w-full h-[8vh] items-center justify-between p-1">
            
            <div id="avatar-container" className="align-middle size-[6vh]">
                <Avatar className="block dark:hidden size-[6vh]">
                    <AvatarImage src={PCT_logo_lightside} alt="PCT Logo"/>
                    <AvatarFallback>PCT</AvatarFallback>
                </Avatar>
                <Avatar className="hidden dark:block size-[6vh]">
                    <AvatarImage src={PCT_logo_darkside} alt="PCT Logo"/>
                    <AvatarFallback>PCT</AvatarFallback>
                </Avatar>
            </div>
            
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