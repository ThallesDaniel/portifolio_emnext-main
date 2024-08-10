import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"

export const ExperienceItem = () =>{
    return(
        <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
            <div className="flex items-center flex-col gap-4">
                <div className="rounded-full border border-gray-500 p-0.5">
                    <Image 
                        src={'/images/favicon-avsystem.png'}
                        width={40}
                        height={40}
                        className="rounded-full"
                        alt="Logo Avsystem"
                    />
                </div>
                <div className="h-full w-[1px] bg-gray-800" />
            </div>

            <div>
                <div className="flex flex-col gap-2 text-sm sm:text-base">
                    <a href="https://www.linkedin.com/company/avsystemgeo/posts/?feedView=all"
                       target="_blank"
                       className="text-gray-500 hover:text-emerald-500 transition-colors">
                        @ AvsystemGeo
                    </a>
                    <h4 className="text-gray-300">Desenvolvedor Web Full-Stack</h4>
                    <span className="text-gray-500">Oct 2022 • Jun 2024 (1 ano e 9 meses)</span>
                    <p className="text-gray-400">Atuei na área de desenvolvimento Full-Stack, Desenvolvendo Web-Apps para gestões de fundiário 
                       e benfeitorias utilizando tecnologias HTML, CSS e JavaScript, Frameworks front-end como Angular 
                       e Ext.js 3.4, e,  back-end como JSP e Spring, lidando com a linguagem Java. Também desenvolvi 
                       sistemas de automações utilizando python, e para lidar com Excel utilizei a biblioteca pandas. 
                       Durante minha passagem na empesa, também desenvolvi um sistema de gerencia de Benfeitorias, 
                       inicialmente utilizando PHP, futuramente migrando para o Angular e Spring, no qual, na época liderei 
                       rapidamente a área de "Novos Negócios".</p>
                    
                    <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">Competências</p>
                    <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
                        <TechBadge name="Angular" />
                        <TechBadge name="Angular" />
                        <TechBadge name="Angular" />
                        <TechBadge name="Angular" />
                        <TechBadge name="Angular" />
                        <TechBadge name="Angular" />
                    </div>

                </div>
            </div>
        </div>
    )
}