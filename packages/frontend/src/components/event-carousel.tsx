import { Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { CarouselNext, CarouselPrevious } from "@/components/cutom-ui/carousel-buttons";
function CarouselEvent(props:any){
    return(
        <CarouselItem className="text-center align-center basis-6/12 lg:basis-1/3"><Card className="bg-datapad-lines border-datapad-border border-double border-4 h-[10vh] hover:scale-105">
            <h1 className="h-1/2 flex items-center text-datapad-foreground justify-center font-semibold leading-5 pt-2">{props.name}</h1>
            <h2 className="h-1/2 flex items-center text-datapad-foreground justify-center leading-4 pb-2">{props.desc}</h2>
        </Card></CarouselItem>
    )
}

export function EventCarousel(){
    return(
        <Carousel className=" w-8/12 lg:w-10/12 mx-[16vw] lg:mx-[8vw] mt-6">
                <h2 className="text-datapad-accent-foreground dark:text-cyan-400 font-medium">Tu lądujemy:</h2>
                <CarouselContent>
                    <CarouselEvent name="Pyrkon 2024" desc="Poznań 14-16.06"/>
                    <CarouselEvent name="Turniej nogi" desc="Poznań 23.06"/>
                    <CarouselEvent name="Gala bokserska" desc="Poznań 30.06"/>
                    <CarouselEvent name="Pilkon 2024" desc="Piła 30.08-1.09"/>
                </CarouselContent>
            <CarouselPrevious className="text-datapad-accent-foreground hover:text-datapad-foreground border-datapad-border border-solid border-2 mt-2 bg-datapad-accent"/>
            <CarouselNext className="text-datapad-accent-foreground border-datapad-border border-solid border-2 mt-2 bg-datapad-accent"/>
        </Carousel>
    )
}