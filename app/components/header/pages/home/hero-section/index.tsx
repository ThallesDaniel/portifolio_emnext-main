import { Button } from "@/app/components/button";
import { TechBadge } from "@/app/components/tech-badge";
import { HiArrowNarrowRight } from "react-icons/hi";
import {
  TbBrandGithub,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandMailgun,
  TbBrandWhatsapp,
} from "react-icons/tb";
import { MdOutlineMail } from "react-icons/md";

import Image from "next/image";

const MOCK_CONTACTS = [
  {
    url: "https://github.com/ThallesDaniel",
    icon: <TbBrandGithub />,
  },
  {
    url: "https://www.linkedin.com/in/thalles-daniel-66a604229",
    icon: <TbBrandLinkedin />,
  },
  {
    url: "mailto:contato@thallesdaniel.com",
    icon: <MdOutlineMail />,
  },
  {
    url: "https://api.whatsapp.com/send/?phone=5531998518179&text&type=phone_number&app_absent=0",
    icon: <TbBrandWhatsapp />,
  },
  {
    url: "https://www.instagram.com/thalles_webdeveloper/",
    icon: <TbBrandInstagram />,
  },
];

export const HeroSection = () => {
  return (
    <section
      className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat 
      flex flex-row justify-end pb-10 sm:pb-32 py-52 lg:pb-[100px]"
    >
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[520px]">
          <p className="font-mono text-emerald-400">Olá! Meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">THALLES DANIEL </h2>
          <p className="text-gray-400 my-6 font-sans-f text-sm sm:text-base">
            Olá! Meu nome é Thalles Daniel e sou um desenvolvedor Full-Stack Web
            apaixonado por criar soluções inovadoras e eficientes. Com uma
            sólida formação e experiência em diversas tecnologias, estou sempre
            pronto para enfrentar desafios e entregar produtos de alta
            qualidade. Estou disponível para colaborações, projetos desafiadores
            e oportunidades que me permitam crescer profissionalmente.
          </p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <TechBadge name="Angular" />
            ))}
          </div>
          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="w-max shadow-button ">
              {" "}
              {/* onClick={handleContact}*/}
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>
            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {MOCK_CONTACTS.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  className="hover:text-gray-100 transition-colors"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <Image
          width={420}
          height={404}
          src={"/images/profile-pic.png"}
          alt="Thalles Daniel"
          className="w-[300px] h-[300px] lg:w-[404px] lg:h-[404px] mb-6 lg:mb-0 rounded-lg object-cover"
        />
      </div>
    </section>
  );
};
