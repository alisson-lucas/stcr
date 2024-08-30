const teatchers = [
    {
        name: 'Abimael de Queiroz',
        function: 'Professor de Missiologia e Antropologia',
        img: '/images/professores/Abimael_de_Queiroz.PNG'
    },
    {
        name: 'Civaldo de Assis',
        function: 'Professor de Missiologia e Antropologia',
        img: '/images/professores/Civaldo_de_Assis.PNG'
    },
    {
        name: 'Dannyel Oliveira',
        function: 'Professor de Missiologia e Antropologia',
        img: '/images/professores/Dannyel_Oliveira.PNG'
    },
    {
        name: 'Emerson Silva',
        function: 'Professor de Missiologia e Antropologia',
        img: '/images/professores/Emerson_Silva.PNG'
    },
    {
        name: 'Fulvio Leite',
        function: 'Professor de Missiologia e Antropologia',
        img: '/images/professores/Fulvio_Leite.PNG'
    },
    {
        name: 'Israel Felipe',
        function: 'Professor de Missiologia e Antropologia',
        img: '/images/professores/Israel_Felipe.PNG'
    },
    {
        name: 'Pedro Silva',
        function: 'Professor de Missiologia e Antropologia',
        img: '/images/professores/Pedro_Silva.PNG'
    },
    {
        name: 'Rafael Araujo',
        function: 'Professor de Missiologia e Antropologia',
        img: '/images/professores/Rafael_Araujo.PNG'
    },
    {
        name: 'Rinado Cezar',
        function: 'Professor de Missiologia e Antropologia',
        img: '/images/professores/Rinado_Cezar.PNG'
    },
]

export default function Teatchers() {
    return (
        <div id="teachers" className="flex items-center justify-center w-full bg-[#353535]">
            <div className="flex flex-col items-center justify-center text-start gap-14 w-full container py-10 lg:py-20 px-8 lg:px-20">
                <div className="flex flex-row items-center justify-start w-full border-b border-white py-4">
                    <h1 className="text-white font-semibold text-3xl text-start">Conheça nosso corpo docente</h1>
                </div>
                <div className="flex flex-row flex-wrap items-center justify-center gap-4 2xl:gap-20">
                    {teatchers.map((teatcher, i) => (
                        <article key={i} className="flex flex-col items-center justify-center text-center text-white gap-3">
                            <img src={teatcher.img} alt="" className="rounded-full w-[200px] h-[200px]"/>
                            <span className="font-semibold">{teatcher.name}</span>
                            <span className="text-sm">{teatcher.function}</span>
                        </article>
                    ))}
                </div>
            </div>
        </div>

    )
}