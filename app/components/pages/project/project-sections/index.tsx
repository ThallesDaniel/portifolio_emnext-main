'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
//import { ProjectSection } from '@/app/types/projects'
import { fadeUpAnimation } from '@/app/lib/animations'

// type ProjectSectionsProps = {
//   sections: ProjectSection[]
// }

const section = [
    {
      title: "Home",
      image:
        "https://www.thallesdaniel.com/assets/img/Captura%20de%20tela%202024-07-02%20115605.png",
    },
    {
      title: "Sistemas",
      image:
        "https://www.thallesdaniel.com/assets/img/Captura%20de%20tela%202024-07-02%20115605.png",
    },
  ];

export const ProjectSections = () => {
  return (
    <section className="container my-12 md:my-32 flex flex-col gap-8 md:gap-32">
      {section.map((section) => (
        <motion.div
          key={section.title}
          className="flex flex-col items-center gap-6 md:gap-12"
          {...fadeUpAnimation}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-medium text-gray-300">
            {section.title}
          </h2>
          <Image
            width={1080}
            height={672}
            className="w-full aspect-auto rounded-lg object-cover"
            alt={`Imagem da sessão ${section.title}`}
            src={section.image}
            unoptimized
          />
        </motion.div>
      ))}
    </section>
  )
}