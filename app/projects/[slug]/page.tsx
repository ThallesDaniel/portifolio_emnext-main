import { ContactForm } from "@/app/components/contact-form";
import { Footer } from "@/app/components/footer";
import { ProjectDetails } from "@/app/components/pages/project/project-detail";
import { ProjectSections } from "@/app/components/pages/project/project-sections";

export default function Project(){
    return(
        <>
        <ProjectDetails/>
        <ProjectSections/>
        <ContactForm/>
        <Footer/>

        </>
    )
}