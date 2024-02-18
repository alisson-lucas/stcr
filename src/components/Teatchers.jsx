const teatchers = [
    {
        name: 'Bruno Santos',
        function: 'Professor de Missiologia e Antropologia',
        img: '/images/p1.jpg'
    },
    {
        name: 'Bruno Santos',
        function: 'Professor de Missiologia e Antropologia',
        img: '/images/p1.jpg'
    },
    {
        name: 'Bruno Santos',
        function: 'Professor de Missiologia e Antropologia',
        img: '/images/p1.jpg'
    },
    {
        name: 'Bruno Santos',
        function: 'Professor de Missiologia e Antropologia',
        img: '/images/p1.jpg'
    },
]

export default function Teatchers() {
    return (
        <div className="flex items-center justify-center w-full bg-[#353535]">
            <div className="flex flex-col items-center justify-center text-start gap-14 w-full container py-10 lg:py-20 px-8 lg:px-20">
                <div className="flex flex-row items-center justify-start w-full border-b border-white py-4">
                    <h1 className="text-white font-semibold text-3xl text-start">Conheça nosso corpo docente</h1>
                </div>
                <div className="flex flex-row flex-wrap items-center justify-center gap-4 2xl:gap-20">
                    {teatchers.map((teatcher, i) => (
                        <article key={i} className="flex flex-col items-center justify-center text-center text-white gap-3">
                            <img src={teatcher.img} alt="" />
                            <span className="font-semibold">{teatcher.name}</span>
                            <span className="text-sm">{teatcher.function}</span>
                        </article>
                    ))}
                </div>
            </div>
        </div>

    )
}