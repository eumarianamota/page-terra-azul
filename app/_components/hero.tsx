import Image from "next/image";
import logo1 from "@/public/logo1.png";
import image1 from '@/public/image1.png';  
import image4 from '@/public/image4.png';

export function Hero() {
    return (
        <section className='pt-10 bg-white text-gray-950 h-screen overflow-hidden px-10 flex flex-col md:flex-row justify-center'>
            <div className="container flex flex-col md:flex-row md:gap-10 justify-center items-center">
                <div className="md:w-120">
                    <header className="flex justify-center md:justify-start">
                        <Image className="w-15" src={logo1} alt="Logo Terra Azul" />
                    </header>

                    <div>
                        <h1 className="text-xl text-center font-bold pb-2 pt-2 md:text-start lg:text-3xl ">Transformando propriedades irregulares em ativos legais</h1>
                        <p className="text-sm text-center text-gray-800 pb-4 md:text-start lg:text-lg">Chega de insegurança nos processos, esse é o caminho para a segurança jurídica e social. <span className="font-bold" >Somos uma empresa especializada em Regularização Fundiária</span> e estamos aqui para te ajudar.</p>
                        <div className="flex justify-center md:justify-start">
                            <button
                            className="bg-linear-to-r from-[#00BBFF] via-[#0077C9] to-[#000080] text-white font-bold text-lg py-2 px-6 rounded-4xl"
                            >
                                Clique em saiba mais
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center pt-5 ">
                    < Image className="rounded-md w-100 md:none" src={image1} alt="Foto de uma familia na frente de um imóvel" /> 
                </div>
            </div>
        </section>
    );
}