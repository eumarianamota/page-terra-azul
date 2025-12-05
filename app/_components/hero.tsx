import Image from "next/image";
import logo1 from "@/public/logo1.png";
import image1 from '@/public/image1.png';  

export function Hero() {
    return (
        <section className="bg-white text-gray-950 flex flex-col items-center justify-start px-3">
            <header className="flex justify-center">
                <Image className="w-10 pt-5 lg:w-20 md:mb-20" src={logo1} alt="Logo Terra Azul" />
            </header>

            <div className="md:flex gap-5 justify-center items-center lg:gap-10">
                <div className="max-w-100 lg:max-w-200 flex flex-col lg:gap-4">
                    <h1 className="text-2xl text-center font-bold mb-2 md:text-start lg:text-3xl">Saiba como podemos transformar propriedades irregulares em ativos legais</h1>
                    <p className="text-center text-gray-800 text-sm md:text-start lg:text-lg">Chega de insegurança nos processos, esse é o caminho para a segurança jurídica e social. <span className="font-bold" >Somos uma empresa especializada em Regularização Fundiária</span> e estamos aqui para te ajudar.</p>
                    <div className="flex justify-center md:justify-start">
                        <button
                        className="bg-linear-to-r from-[#00BBFF] via-[#0077C9] to-[#000080] text-white font-bold text-lg py-2 px-6 rounded-2xl mt-4 mb-5 lg:text-lg"
                        >
                            Clique em saiba mais
                        </button>
                    </div>
                </div>

                <div className="flex justify-center">
                    < Image className="rounded-md max-w-75 md:max-w-100 lg:max-w-130" src={image1} alt="Foto de uma familia na frente de um imóvel" /> 
                </div>
            </div>
        </section>
    );
}