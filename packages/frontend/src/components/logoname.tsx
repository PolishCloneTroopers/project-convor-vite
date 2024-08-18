
export default function LogoName(){
    return (
        <>
        <div className="w-full mt-6 md:mt-10 lg:mt-12 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold font-rog text-center">
                Polish Clone Troopers
            </h1>
            <div className="w-[90vw] h-10 relative">
                {/* Gradients */}
                <div className="absolute inset-x-[11.25vw] top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[4px] w-3/4 blur-sm" />
                <div className="absolute inset-x-[11.25vw] top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4" />
                <div className="absolute inset-x-[33.75vw] top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[7px] w-1/4 blur-sm" />
                <div className="absolute inset-x-[33.75vw] top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[2px] w-1/4" />
            </div>
        </div>
        </>
    )
}