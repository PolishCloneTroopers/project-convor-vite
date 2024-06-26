import { Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { CarouselNext, CarouselPrevious } from "@/components/cutom-ui/carousel-buttons";
function CarouselEvent(props:any){
    return(
        <CarouselItem className="text-center align-center basis-6/12 lg:basis-1/3"><Card className="bg-accent border-cyan-500 border-double border-4 h-[10vh]">
            <h1 className="h-1/2 flex items-center justify-center text-cyan-800 dark:text-cyan-300 font-semibold leading-5 pt-2">{props.name}</h1>
            <h2 className="h-1/2 flex items-center justify-center text-cyan-800 dark:text-cyan-300 leading-4 pb-2">{props.desc}</h2>
        </Card></CarouselItem>
    )
}

export function EventCarousel(){
    return(
        <Carousel className=" w-8/12 lg:w-10/12 mx-[16vw] lg:mx-[8vw] mt-6">
                <h2 className="text-cyan-700 dark:text-cyan-400 font-medium">Tu lądujemy:</h2>
                <CarouselContent>
                    <CarouselEvent name="Pyrkon 2024" desc="Poznań 14-16.06"/>
                    <CarouselEvent name="Turniej nogi" desc="Poznań 23.06"/>
                    <CarouselEvent name="Gala bokserska" desc="Poznań 30.06"/>
                    <CarouselEvent name="Pilkon 2024" desc="Piła 30.08-1.09"/>
                </CarouselContent>
            <CarouselPrevious className="text-cyan-500 border-cyan-500 border-solid  border-2 mt-2"/>
            <CarouselNext className="text-cyan-500 border-cyan-500 border-solid  border-2 mt-2"/>
        </Carousel>
    )
}