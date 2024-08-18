import PitDroid1 from '@/assets/DUM-series_pit_droid.webp'
import PitDroid2 from '@/assets/Pitdroidstack_wsmi.webp'
import ClonestructionSign from '@/assets/clonestruction-works.png'
export function About(){
    return(
        <>
            <div className='w-[100vw] h-[89vh] relative overflow-x-clip'>
                <img className="absolute h-1/2 lg:w-[15vw] -bottom-6 lg:left-36" src={PitDroid1} alt="Pit Droid" />
                <img className="absolute lg:w-[25vw] -bottom-6 -right-20 lg:right-16" src={PitDroid2} alt="Pit Droid" />
                <img className="absolute lg:w-[40vw] lg:left-[30vw] -z-10  top-10" src={ClonestructionSign} alt="Prace klonowe" />
            </div>
        </>   
    )
}