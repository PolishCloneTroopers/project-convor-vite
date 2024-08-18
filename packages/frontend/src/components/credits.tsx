import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";


export function Credits ({className}:{className?:string}) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open === false) {
            console.log('Drawer is close');
        }
    }, [open]);


    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger>
                <button className={cn(className)}>Prawa autorskie</button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-max max-w-sm">
                    <DrawerHeader>
                        <DrawerTitle>Copyrighty ©</DrawerTitle>
                        <DrawerDescription>Co i od kogo żeśmy <span className="line-through">kradli</span> pożyczali:</DrawerDescription>
                    </DrawerHeader>
                    <div className="px-4">
                        <div>Czcionka ROG: <a className="font-semibold">Copyright © LyonsType 2022</a></div><br/>
                        <div>Tło z Kamino: <a className="font-semibold">Copyright © 2017 Electronic Arts Inc. and EA DICE</a></div><br/>
                        <div>Ikony Lucide: <a className="font-semibold">Copyright © 2013-2024 Cole Bemis and Lucide Contributors</a></div><br/>
                        <div>Logo Polish Clone Troopers i ikony LEGO® Żołnierzy Klonów™: <a className="underline font-semibold text-datapad-foreground" href="/members#IDREXA">CT-7567 Rex</a></div><br/>
                        <div>Projekt i wykonanie strony: <a className="underline font-semibold text-datapad-foreground" target="_blank" href="https://github.com/RybazPolski">CT-9415 Hardcase</a></div><br/>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
