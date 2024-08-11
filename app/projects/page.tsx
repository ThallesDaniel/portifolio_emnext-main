import { BackToTop } from "../components/back-to-top";
import { ContactForm } from "../components/contact-form";
import { Footer } from "../components/footer";
import { PageIntroduction } from "../components/pages/projects/page-introduction";
import { ProjectsList } from "../components/pages/projects/project-list";

export default function Projects() {
  return (
    <>
      <PageIntroduction/>
      <ProjectsList/>
      <ContactForm/>
      <Footer/>
      <BackToTop/>
    </>
  );
}
