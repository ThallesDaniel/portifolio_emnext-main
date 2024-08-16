import { ContactForm } from "@/app/components/contact-form";
import { Footer } from "@/app/components/footer";
import { ProjectDetails } from "@/app/components/pages/project/project-detail";
import { ProjectSections } from "@/app/components/pages/project/project-sections";
import { fetchHygraphQuery } from "@/app/utils/fetch-hygraph-query";

type ProjectProps = {
    params: {
      slug: string
    }
  }
  

const getProjectDetails = async (slug: string): Promise<any> => {
    const query = `
  query ProjectQuery() {
    project(where: {slug: "${slug}"}) {
      pageThumbnail {
        url
      }
      thumbnail {
        url
      }
      sections {
        title
        image {
          url
        }
      }
      title
      shortDescription
      description {
        raw
        text
      }
      technologies {
        name
      }
      liveProjectUrl
      githubUrl
    }
  }
      `
  
    return fetchHygraphQuery(
      query,
      1000 * 60 * 60 * 24, 
    )
  }
  

export default async function Project({ params: { slug } }: ProjectProps) {
    const response = await getProjectDetails(slug)
    console.log(response)
    return(
        <>
        <ProjectDetails/>
        <ProjectSections/>
        <ContactForm/>
        <Footer/>

        </>
    )
}