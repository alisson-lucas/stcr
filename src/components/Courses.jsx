export default function Courses() {
    return (
        <div className="flex items-center justify-center w-full bg-[#F0E9D8]">
            <div className="flex flex-col items-start justify-center text-start gap-14 w-full container py-10 lg:py-20 px-8 lg:px-20">
                <div className="flex flex-row items-center justify-start w-full border-b border-black py-4">
                    <h1 className="text-[#353535] font-semibold text-3xl text-start">Nossos cursos</h1>
                </div>
                <div className="flex flex-row flex-wrap items-start justify-between gap-4">
                    <article className="flex flex-col bg-[#353535] w-full lg:w-[calc(100%/2-50px)] min-h-[666px] gap-4">
                        <img src="/images/curso1.png" alt="Curso de Teología" />
                        <div className="flex flex-col w-full gap-4 py-8 px-8">
                            <span className="text-white text-2xl font-semibold">Teologia Contemporânea: <br /> Desafios e Perspectivas</span>
                            <span className="text-white text-base font-normal">Este curso de teologia explora as complexidades e desafios que a teologia enfrenta no mundo contemporâneo.</span>
                        </div>
                    </article>
                    <article className="flex flex-col bg-[#353535] w-full lg:w-[calc(100%/2-50px)] min-h-[666px] gap-4">
                        <img src="/images/curso2.png" alt="Curso de Teología" />
                        <div className="flex flex-col w-full gap-4 py-8 px-8">
                            <span className="text-white text-2xl font-semibold">Teologia Comparada: <br /> Compreendendo Diversas Perspectivas Religiosas</span>
                            <span className="text-white text-base font-normal">Este curso de teologia explora as complexidades e desafios que a teologia enfrenta no mundo contemporâneo.</span>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}