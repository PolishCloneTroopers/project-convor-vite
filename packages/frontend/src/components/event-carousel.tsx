import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card } from "./ui/card";

function CaroouselEvent(props:any){
    return(
        <CarouselItem className="text-center align-center basis-1/2 lg:basis-1/3"><Card className="bg-accent border-cyan-500 h-[10vh]">
            <h1 className="h-1/2 flex items-center justify-center">{props.name}</h1>
            <span className="h-1/2">{props.desc}</span>
        </Card></CarouselItem>
    )
}

export function EventCarousel(){
    return(
        <Carousel className="w-8/10">
                <h2 className="underline text-cyan-300">Tu lądujemy:</h2>
                <CarouselContent>
                    <CaroouselEvent name="1" desc="Opis 1"/>
                    <CaroouselEvent name="2" desc="Opis 2"/>
                    <CaroouselEvent name="3" desc="Opis 3"/>
                </CarouselContent>
            <CarouselNext />
            <CarouselPrevious />
        </Carousel>
    )
}