export default function About() {
    return (
        <div id="about" className="flex items-center justify-center w-full bg-white">
            <div className="flex flex-col items-center justify-between text-start gap-14 w-full lg:max-w-screen-lg 2xl:max-w-screen-xl py-10 lg:py-20 px-6 lg:px-20">
                <h1 className="text-4xl lg:text-6xl font-bold text-center tracking-tight text-gray-900 sm:text-6xl">
                O melhor lugar para aprender sobre as escrituras sagradas
                </h1>
                <span className='text-gray-700 text-center text-sm lg:text-base'>Somos o Seminário Teológico Congregacional do Recife, uma instituição de ensino superior que oferece cursos de graduação, pós-graduação e extensão na área de teologia. Nossa missão é formar líderes cristãos capacitados para servir a Deus e à sua igreja, com base na fé reformada e na confessionalidade congregacional.</span>
                <span className='text-gray-700 text-center text-sm lg:text-base'>A Koinonia é a associação de igrejas congregacionais ligadas a UIECB (União de Igrejas Evangélicas Congregacionais do Brasil) na região metropolitana do Recife e Sergipe.</span>
            </div>
        </div>
    )
}