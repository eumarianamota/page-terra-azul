import {Newspaper, UsersRound, Rocket} from 'lucide-react'

export function Services() {
    return (
        <section className="bg-white text-gray-950 flex flex-col items-center h-full px-3 pt-10 pb-10 md:pt-35">
            <div>
                <div>
                    <h2 className='text-2xl font-bold text-center text-gray-950 pb-5 lg:text-4xl'>Como podemos te ajudar?</h2>    
                </div>

                <div className='flex flex-wrap justify-center gap-10 pt-5'>
                    <div className='flex flex-col gap-2 border-b-2 border-r-2 border-gray-200 rounded-2xl shadow-[10px_10px_10px_-5px_rgba(0,0,0,0.2)] p-6 bg-white max-w-80 transform hover:scale-105 transition-transform duration-300'>
                        < Newspaper className="bg-linear-to-r from-[#00BBFF] via-[#0077C9] to-[#000080] rounded-4xl p-2 w-10 h-10 text-white" />
                        <h3 className='text-lg font-bold'>Prestação de serviços de regularização fundiária</h3>
                        <p className='text-sm'>A prestação de serviços de regularização fundiária envolve diversas atividades e processos a fim de garantir a legalidade e a regularidade de propriedades. Este servuço busca resolver várias questões relacionadas a posse, documentação e titulação de terras.</p>
                    </div>

                    <div className='flex flex-col gap-2 border-b-2 border-r-2 border-blue-800 rounded-2xl shadow-[10px_10px_10px_-5px_rgba(0,0,0,0.2)] p-6 bg-linear-to-r from-[#00BBFF] via-[#0077C9] to-[#000080] *:text-white max-w-80 transform hover:scale-105 transition-transform duration-300'>
                        < UsersRound className="text-[#000080]  rounded-4xl p-2 w-10 h-10" />
                        <h3 className='text-lg font-bold'>Consultoria/mentoria para prefeituras e empresas</h3>
                        <p className='text-sm'>A consultoria ou mentoria para prefeituras ou empresas, em ambos os casos sob uma parte extremamente crucial, visando uma série de melhorias à gestão, inovação e crescimento. Buscando implementar projetos eficazes e alcançar objetivos estratégicos.</p>
                    </div>

                    <div className='flex flex-col gap-2 border-b-2 border-r-2 border-gray-200 rounded-2xl shadow-[10px_10px_10px_-5px_rgba(0,0,0,0.2)] p-6 bg-white max-w-80 transform hover:scale-105 transition-transform duration-300'>
                        < Rocket className="bg-linear-to-r from-[#00BBFF] via-[#0077C9] to-[#000080] rounded-4xl p-2 w-10 h-10 text-white" />
                        <h3 className='text-lg font-bold'>Programa Periferia Viva</h3>
                        <p className='text-sm'>O programa oferece recursos financeiros para que os municípios possam promover a regularização fundiária e melhorias habitacionais aos núcleos urbanos informais consolidados. O programa busca viabilizar aos municípios na implantação da regularização fundiária mesmo que sem muitos recursos próprios.</p>
                    </div>

                    <div className='flex flex-col gap-2 border-b-2 border-r-2 border-blue-800 rounded-2xl shadow-[10px_10px_10px_-5px_rgba(0,0,0,0.2)] p-6 bg-linear-to-r from-[#00BBFF] via-[#0077C9] to-[#000080] *:text-white max-w-80 transform hover:scale-105 transition-transform duration-300'>
                        < UsersRound className="text-[#000080]  rounded-4xl p-2 w-10 h-10" />
                        <h3 className='text-lg font-bold'>Apoio Técnico para Elaboração de Projetos de REURB</h3>
                        <p className='text-sm'>O Apoio Técnico para Elaboração de Projetos de Regularização Fundiária Urbana (REURB) foca na criação de todos os documentos e estudos necessários, como levantamentos topográficos, planos urbanísticos e ambientais, e memoriais descritivos.</p>
                    </div>
                </div>
            </div>


        </section>
    )
}