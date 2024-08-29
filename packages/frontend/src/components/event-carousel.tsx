import { Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { CarouselNext, CarouselPrevious } from "@/components/cutom-ui/carousel-buttons";
import { PinContainer } from "@/components/cutom-ui/events-3d-pin";
function CarouselEvent(props:{name:string, desc:string, href:string, linkMessage:string}){
    
    
    return(
        <CarouselItem className="text-center align-center basis-6/12 lg:basis-1/3">
            {/* <PinContainer
                title={props.linkMessage+" >"}
                href={props.href}> */}
            <Card className="bg-datapad-lines border-datapad-border border-double border-4 h-[10vh]">
                <h1 className="h-1/2 flex items-center text-datapad-foreground justify-center font-semibold leading-4 pt-2 font-rog text-2xs lg:text-xl">{props.name}</h1>
                <h2 className="h-1/2 flex items-center text-datapad-foreground justify-center leading-5 pb-2 font-rog text-3xs lg:text-base">{props.desc}</h2>
            </Card>
            {/* </PinContainer> */}
        </CarouselItem>
    )
}

export function EventCarousel(){
    return(
        <Carousel className=" w-8/12 lg:w-10/12 mx-[16vw] lg:mx-[8vw] mt-6">
                <h2 className="text-datapad-accent-foreground font-medium">Tu lądujemy:</h2>
                <CarouselContent>
                    <CarouselEvent name="Dni Fantastyki 2024" desc="Wrocław 20&minus;25.08" href="https://dnifantastyki.pl" linkMessage="Strona"/>
                    <CarouselEvent name="Pilkon 2024 (Wioska)" desc="Piła 30.08&minus;1.09" href="https://pilkon.pl" linkMessage="Strona"/>
                    <CarouselEvent name="Pyrkon 2025" desc="Poznań 13&minus;15.06.2025" href="https://pyrkon.pl" linkMessage="Strona"/>
                </CarouselContent>
            <CarouselPrevious className="text-datapad-accent-foreground hover:text-datapad-foreground border-datapad-border border-solid border-2 mt-2 bg-datapad-accent"/>
            <CarouselNext className="text-datapad-accent-foreground hover:text-datapad-foreground border-datapad-border border-solid border-2 mt-2 bg-datapad-accent"/>
        </Carousel>
    )
}