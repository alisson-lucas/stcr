export default function Hero() {
    return (
        <div className="flex items-center justify-center relative w-full shadow-lg isolate px-6 py-14 lg:px-8  bg-[url('/images/palestra.png')] h-[1300px] bg-cover bg-top bg-no-repeat after:content[''] after:absolute after:bg-gradient-to-t after:from-black/70 after:to-transparent after:top-0 after:bottom-0 after:right-0 after:left-0 after:z-20">
            <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:max-w-screen-lg 2xl:max-w-screen-xl py-28 z-30">
                <div className="flex flex-col text-center items-center justify-center gap-10 w-full lg:w-1/2 lg:min-h-[500px]"></div>
            </div>
        </div>
    )
}