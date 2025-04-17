export default function Footer() {
    return (
        <footer className="flex flex-col lg:flex-row items-center justify-between bg-[#353535] gap-4 px-8 lg:px-20 py-4 2xl:py-8">
            <div className="flex flex-row items-center justify-center gap-4">
                <img src="/images/logo2.png" alt="" />
                <div className="w-[1px] h-8 bg-gray-400"></div>
                <img src="/images/logo-koinonia.png" alt="" className="w-28"/>
            </div>
            <p className="text-sm text-gray-400">STCR &copy;{new Date().getFullYear()} | Desenvolvido por <a href="https://aiadigital.com.br" className="font-bold" >Aia Digital</a></p>
        </footer>
    )
}