import { Link } from '@/app/components/link'
import { TechBadge } from '@/app/components/tech-badge'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'

export const ProjectCard = () =>{
    return(
        <div className='flex gap-6 lg:gap-12 flex-col lg:flex-row'>
            <div className='w-full h-full'>
                <Image
                 width={420}
                 height={304}
                 src="https://www.thallesdaniel.com/assets/img/Captura%20de%20tela%202024-07-02%20115605.png"
                 alt="Thmbnail projeto"
                 className='w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg'
                 />
            </div>
            <div>
                <h3 className='flex items-center gap-3 font-medium text-lg text-gray-50'>Start-Up</h3>
                <p className='text-gray-400 my-6'> Site criado para manter as habilidades básicas de angular, responsividade e lógicas de programação em TypeScript, utilizei a framework Angular V17. </p>
                <div className='flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]'>
                    <TechBadge name='Angular' />
                    <TechBadge name='Angular' />
                    <TechBadge name='Angular' />
                </div>
                <Link href='/projects/startup'>
                    Ver Projeto
                    <HiArrowNarrowRight/>
                </Link>
            </div>
        </div>
    )
}