export default function Features() {
    return (

        <div className='w-full flex flex-row items-center justify-center flex-wrap bg-white p-10 lg:p-20' >
            <div className="flex flex-col w-full container items-center justify-center gap-10 lg:gap-20">
                <div className="relative flex flex-row flex-wrap w-full min-h-[900px] lg:min-h-[50px] items-center justify-center gap-10">
                    <div className="w-full flex flex-row flex-wrap items-center justify-center gap-10">
                        <article className="flex flex-col items-center justify-center lg:justify-start w-full lg:w-[calc(100%/4-30px)] lg:min-h-[308px] gap-10 py-10 p-4 bg-[#353535] hover:bg-[#234689] rounded-3xl">
                            <div className="flex flex-col items-start justify-center w-full 2xl:px-10 gap-8">
                                <span className="text-xl text-white font-semibold">Ensino Confessional</span>
                                <p className="text-white">O nosso seminário é comprometido com uma educação reformada. Ser Cristão é ser parte daquilo que o Espírito ensino ao longo da história da igreja.</p>
                            </div>
                        </article>
                        <article className="flex flex-col items-center justify-center lg:justify-start w-full lg:w-[calc(100%/4-30px)] lg:min-h-[308px] gap-10 py-10 p-4 bg-[#353535] hover:bg-[#234689] rounded-3xl">
                            <div className="flex flex-col items-start justify-center w-full 2xl:px-10 gap-8">
                                <span className="text-xl text-white font-semibold">Educação integral</span>
                                <p className="text-white">Nosso propósito é formar mais do que intelectos, mas servos do Reino. Além das aulas, há encontros de tutoria para acompanhar e ajudar na caminhada de aprendizagem e formação.</p>
                            </div>
                        </article>
                        <article className="flex flex-col items-center justify-center lg:justify-start w-full lg:w-[calc(100%/4-30px)] lg:min-h-[308px] gap-10 py-10 p-4 bg-[#353535] hover:bg-[#234689] rounded-3xl">
                            <div className="flex flex-col items-start justify-center w-full 2xl:px-10 gap-8">
                                <span className="text-xl text-white font-semibold">Educação Eclesiástica</span>
                                <p className="text-white">Nosso foco é a formação para edificação das igrejas locais. Toda disciplina e aprendizado busca levar os alunos ao serviço na igreja.</p>
                            </div>
                        </article>
                        <article className="flex flex-col items-center justify-center lg:justify-start w-full lg:w-[calc(100%/4-30px)] lg:min-h-[308px] gap-10 py-10 p-4 bg-[#353535] hover:bg-[#234689] rounded-3xl">
                            <div className="flex flex-col items-start justify-center w-full 2xl:px-10 gap-8">
                                <span className="text-xl text-white font-semibold">Educação Pública</span>
                                <p className="text-white">Uma formação para que cristãos possam assumir os pressupostos bíblicos em todas as áreas do saber (exatadas, biológicas, saúde, humanas etc).</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>

    )
}