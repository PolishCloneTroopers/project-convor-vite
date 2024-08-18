import PitDroid1 from '@/assets/PitDroids-WiaW05.webp'
import PitDroid2 from '@/assets/DUMpitdreoid-NEGTD.webp'
import ClonestructionSign from '@/assets/clonestruction-works.png'
export function Members(){
    return(
        <>
            <div className='w-[100vw] h-[89vh] relative overflow-x-clip'>
                <img className="absolute h-3/4 lg:w-[22vw] -bottom-6 left-24" src={PitDroid1} alt="Pit Droid" />
                <img className="absolute h-3/4 lg:w-[25vw] -bottom-6 right-20" src={PitDroid2} alt="Pit Droid" />
                <img className="absolute w-[90vw] left-[5vw] lg:w-[40vw] lg:left-[30vw] -z-10 top-5 lg:top-10" src={ClonestructionSign} alt="Prace klonowe" />
            </div>
        </>   
    )
}