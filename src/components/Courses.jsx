export default function Courses() {
    return (
        <div id="courses" className="flex items-center justify-center w-full bg-white">
            <div className="flex flex-col items-start justify-center text-start gap-14 w-full container py-10 lg:py-20 px-8 lg:px-20">
                <div className="flex flex-row items-center justify-start w-full border-b border-black py-4">
                    <h1 className="text-[#353535] font-semibold text-3xl text-start">Nossos cursos</h1>
                </div>
                <div className="flex flex-row flex-wrap items-start justify-between gap-4">
                    <article className="flex flex-col bg-[#353535] w-full lg:w-[calc(100%/3-50px)] min-h-[300px] gap-4">
                        <img src="/images/Minicursos/34.png" alt="Curso de Teología" />
                        <div className="flex flex-col w-full gap-4 py-8 px-6">
                            <span className="text-white text-xl lg:text-[1.2rem] font-semibold">Lendo as escrituras</span>
                            {/* <span className="text-white text-base font-normal">Este curso de teologia explora as complexidades e desafios que a teologia enfrenta no mundo contemporâneo.</span> */}
                        </div>
                    </article>
                    <article className="flex flex-col bg-[#353535] w-full lg:w-[calc(100%/3-50px)] min-h-[300px] gap-4">
                        <img src="/images/Minicursos/35.png" alt="Curso de Teología" />
                        <div className="flex flex-col w-full gap-4 py-8 px-6">
                            <span className="text-white text-xl lg:text-[1.2rem] font-semibold">Ed. cristã infantil</span>
                            {/* <span className="text-white text-base font-normal">Este curso de teologia explora as complexidades e desafios que a teologia enfrenta no mundo contemporâneo.</span> */}
                        </div>
                    </article>
                    <article className="flex flex-col bg-[#353535] w-full lg:w-[calc(100%/3-50px)] min-h-[300px] gap-4">
                        <img src="/images/Minicursos/36.png" alt="Curso de Teología" />
                        <div className="flex flex-col w-full gap-4 py-8 px-6">
                            <span className="text-white text-xl lg:text-[1.2rem] font-semibold">Família da aliança</span>
                            {/* <span className="text-white text-base font-normal">Este curso de teologia explora as complexidades e desafios que a teologia enfrenta no mundo contemporâneo.</span> */}
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}