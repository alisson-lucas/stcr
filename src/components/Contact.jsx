export default function Contact() {
    return (
        <div className="relative flex items-center justify-center w-full bg-[#F0E9D8]">
            <img src="/images/logo-xl.png" alt="" className="absolute top-10 right-0 z-20 opacity-50 lg:opacity-100" />
            <div className="flex flex-col items-start justify-center text-start gap-14 w-full container py-10 lg:py-20 px-8 lg:px-20 z-30">
                <h1 className="text-[#353535] font-bold text-5xl leading-snug">Venha <br /> aprender <br /> conosco</h1>
                <form action="" className="flex flex-col items-start justify-center w-full lg:w-1/2 gap-6">
                    <input type="text" placeholder="Nome" className="w-full bg-transparent p-2 text-black border-b border-black outline-none" />
                    <input type="text" placeholder="E-mail" className="w-full bg-transparent p-2 text-black border-b border-black outline-none" />
                    <input type="text" placeholder="Telefone (whatsapp)" className="w-full bg-transparent p-2 text-black border-b border-black outline-none" />
                    <select name="cursos" className="w-full bg-transparent p-2 text-black border-b border-black outline-none"> 
                        <option value="Escolha o curso" disabled>Escolha o curso</option>
                        <option value="Básico">Básico</option>
                        <option value="Formação">Formação</option>
                    </select>
                    <input type="button" value="Entre em contato" className="rounded-xl bg-[#2A2C6F] mt-8 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#2A2C6F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"/>
                </form>
            </div>
        </div>
    )
}