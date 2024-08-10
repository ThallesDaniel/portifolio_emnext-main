import { BackToTop } from "./components/back-to-top";
import { ContactForm } from "./components/contact-form";
import { Footer } from "./components/footer";
import { HeroSection } from "./components/pages/home/hero-section";
import { Highlightedprojects } from "./components/pages/home/highlighted-projects";
import { KnownTechs } from "./components/pages/home/known-techs";
import { WorkExperience } from "./components/pages/home/work-experience";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnownTechs />
      <Highlightedprojects/>
      <WorkExperience/>
      <ContactForm/>
      <Footer/>
      <BackToTop/>
    </>
  )
}
