import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

export default function ImageLink({src, alt, href, target, className, containerClassName}:{src:string, alt?:string, href:string, target?:string, className?:string, containerClassName?:string}){
    return (
        <NavLink to={href} target={target} className={cn("",containerClassName)}>
            <img src={src} alt={alt} className={className}/>
        </NavLink>
    )
}