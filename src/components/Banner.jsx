export default function Banner() {
    return (

        <div className="flex items-center justify-center relative w-full shadow-lg isolate px-6 py-12 pb-0 lg:px-8 bg-[#F0E9D8]">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full container gap-20 py-0 lg:px-10">
                <div className="flex flex-col text-start gap-10 w-full lg:w-1/2">
                    <h1 className="text-5xl lg:text-6xl font-bold tracking-widest text-gray-900 sm:text-6xl">
                    Ensino das escrituras
                    </h1>
                    <span className='text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda obcaecati facilis commodi accusamus corporis quasi excepturi quaerat deleniti consequatur? Ipsum, culpa? Error distinctio numquam veritatis atque rem ratione expedita corrupti.</span>

                    <div className="flex items-center justify-start gap-x-8">
                        <a
                            href="" target="_blank"
                            className="rounded-xl bg-[#2A2C6F] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#2A2C6F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Conheça
                        </a>
                        <a
                            href="" target="_blank"
                            className="rounded-xl border border-[#2A2C6F] px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-[#2A2C6F] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Nos contate <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
                <div className='flex relative'>
                    <img src='/images/homem2.png' className='w-auto block z-30 rounded-lg' />
                </div>
            </div>
        </div>
    )
}