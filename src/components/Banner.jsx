export default function Banner() {
    return (

        <div id="banner" className="flex items-center justify-center w-full relative shadow-lg isolate px-6 py-0 lg:py-8 pb-0 lg:px-8 bg-white">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full h-[688px] lg:h-auto container gap-20 py-0 lg:px-10">
                <div className="flex flex-col text-start gap-10 py-20 lg:py-0 2xl:py-20 w-full lg:w-1/2">
                    <h1 className="text-5xl lg:text-6xl font-bold tracking-widest text-gray-900">
                        Forme-se na tradição reformada
                    </h1>
                    <span className='text-gray-700 text-sm lg:text-base'>Seminário com a teologia fundamentada nas grandes confissões da <b>Reforma Protestante</b> com ênfase na tradição Histórica Congregacional.</span>

                    <div className="flex items-center justify-start gap-x-8">
                        <a
                            href="#about" target="_blank"
                            className="rounded-xl bg-[#2A2C6F] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#2A2C6F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Conheça
                        </a>
                        <a
                            href="#contact"
                            className="rounded-xl border border-[#2A2C6F] px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-[#2A2C6F] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Nos contate <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
                <div className='flex w-1/2'>
                    <img src='/images/banner-img.png' className='w-auto lg:w-[722px] 2xl:w-[830px] lg:h-[420px] 2xl:h-[515px] block z-30 rounded-lg absolute bottom-0 right-0 lg:right-4 2xl:right-10' />
                </div>
            </div>
        </div>
    )
}