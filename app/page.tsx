import { ContactForm } from "./components/contact-form";
import { Footer } from "./components/footer";
import { HeroSection } from "./components/header/pages/home/hero-section";
import { Highlightedprojects } from "./components/header/pages/home/highlighted-projects";
import { KnownTechs } from "./components/header/pages/home/known-techs";
import { WorkExperience } from "./components/header/pages/home/work-experience";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnownTechs />
      <Highlightedprojects/>
      <WorkExperience/>
      <ContactForm/>
      <Footer/>
    </>
  )
}
