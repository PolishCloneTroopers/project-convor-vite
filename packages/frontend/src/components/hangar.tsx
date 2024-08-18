import { EventCarousel } from "@/components/event-carousel";
import LogoName from "@/components/logoname";
import ImageLink from "@/components/imageLink";
import FacebookIcon from "@/assets/fb_icon.png";
import InstagramIcon from "@/assets/ig_icon.png";
import DiscordIcon from "@/assets/dc_icon.png";
import { Button } from "@/components/ui/moving-border";
import { NavLink } from "react-router-dom";
export function Hangar(){
    return(
        <>
            <div className="overscroll-y-none">
            <div id="events">
                <EventCarousel />
            </div>
            <div id="logoname">
                <LogoName />
            </div>
            <div id="links">
                <div id="social" className="flex flex-row align-middle mx-[15vw] lg:mx-[25vw] lg:mt-[2.5vh]">
                    {[{src:FacebookIcon,alt:"Facebook",href:"https://facebook.com/polishclonetroopers",},{src:InstagramIcon,alt:"Instagram",href:"https://instagram.com/polishclonetroopers",},{src:DiscordIcon,alt:"Discord",href:"/join",},].map(function(object){
                        return (
                            <ImageLink src={object.src} alt={object.alt} href={object.href} className="w-[25vw] lg:w-[8vw]" containerClassName="m-2 my-auto lg:m-auto"/>
                        )
                    })}
                </div>
                <div id="navigation" className="lg:flex lg:flex-row align-middle lg:mx-[10vw] pt-[5vh]">
                    {[{to:"/about",text:"Kim jesteśmy?"}, {to:"/join",text:"Dołącz do nas!"}, {to:"/members",text:"Nasi żołnierze"}].map(function(object){
                        return (
                            <NavLink className="w-3/4 lg:w-full m-[12.5vw] lg:m-5" to={object.to}><Button className="text-3xl md:text-4xl lg:text-5xl" containerClassName="w-3/4 lg:w-full lg-[10vh] lg:h-[15vh] my-[1vh]" borderClassName="h-80 w-80 bg-[radial-gradient(var(--sky-500)_10%,transparent_80%)] opacity-[0.8]">{object.text}</Button></NavLink>
                        )
                    })}
                </div>
            </div>
            </div>
        </>   
    )
}