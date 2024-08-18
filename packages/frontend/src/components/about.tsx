import PitDroid1 from '@/assets/DUM-series_pit_droid.webp'
import PitDroid2 from '@/assets/Pitdroidstack_wsmi.webp'
import ClonestructionSign from '@/assets/clonestruction-works.png'
export function About(){
    return(
        <>
            <div className='w-[100vw] h-[89vh] relative'>
                <img className="absolute w-[15vw] -bottom-6 left-36" src={PitDroid1} alt="Pit Droid" />
                <img className="absolute w-[25vw] -bottom-6 right-20" src={PitDroid2} alt="Pit Droid" />
                <img className="absolute block w-[40vw] left-[30vw] top-10" src={ClonestructionSign} alt="Prace klonowe" />
            </div>
        </>   
    )
}