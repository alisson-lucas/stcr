export default function Footer() {
    return (
        <footer className="flex flex-col lg:flex-row items-center justify-between bg-[#353535] gap-4 px-8 lg:px-20 py-4 2xl:py-8">
            <img src="/images/logo2.png" alt="" />
            <p className="text-sm text-gray-400">STCR &copy;{new Date().getFullYear()} | Desenvolvido por <a href="https://aiadigital.com.br" className="font-bold" >Aia Digital</a></p>
        </footer>
    )
}