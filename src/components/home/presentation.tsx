import Image from "next/image"
import Button from "@/components/home/button"


export const Presentation = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen md:max-w-[680px] pt-[110px]">
            <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
                <img src="/logos/mapa_tecs.png" alt="" className="z-[-1] opacity-10 w-full h-full object-cover"/>
            </div>

            <img src="/logos/logo_tecs_mapa.png" alt="Logo do Tecs" className="w-[15rem] md:w-[22rem] mb-6 pt-6" />

            <div className="flex flex-col text-center mx-4 my-4 text-[0.9rem] max-w-[480px] md:text-left text-tecs-textprimary">
                <p className="mb-[1rem] md:indent-8"> O <strong>Tecs |  Grupo de comput{"{"}ação social{"}"}</strong> da USP   é um grupo de extensão universitária iniciado por alunes do Bacharelado em Ciência da Computação do IME-USP, focado no impacto social da computação e da tecnologia. Ele é parte do TechShift, uma aliança global de organizações estudantis com esse mesmo propósito.</p>
                <p className="md:indent-8">O grupo é constituído por três frentes de  desenvolvimento — educação, ética e serviços. Elas visam, respectivamente, promover a educação tecnológica igualitária da população por meio de cursos, oficinas e ações promovidas pelo grupo; unir esforços para formar uma sociedade e profissionais éticos e conscientes sobre o uso da  tecnologia; e estimular alunos a usarem a tecnologia para solucionar problemas da  comunidade local.</p>
            </div>
            <Button href="/sobre" className="my-6">PARTICIPE</Button>
        </div>
    )
}