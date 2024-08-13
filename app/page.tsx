import { BackToTop } from "./components/back-to-top";
import { ContactForm } from "./components/contact-form";
import { Footer } from "./components/footer";
import { HeroSection } from "./components/pages/home/hero-section";
import { Highlightedprojects } from "./components/pages/home/highlighted-projects";
import { KnownTechs } from "./components/pages/home/known-techs";
import { WorkExperience } from "./components/pages/home/work-experience";
import { HomePageData } from "./types/page-info";
import { fetchHygraphQuery } from './utils/fetch-hygraph-query'

export const metadata = {
  title: 'Home',
}

const getPageData = async (): Promise<HomePageData> => {
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        technologies {
          name
        }
        profilePicture {
          url
        }
        socials {
          url
          iconSvg
        }
        knownTechs {
          iconSvg
          name
          startDate
        }
      }
    }
  `

  return fetchHygraphQuery(
    query,
    1000 * 60 * 60 * 24,
  )
}
 
export default async function Home() {
  const { page: PageData } = await getPageData()
  
  return (
    <>
      <HeroSection homeInfo = {PageData} />
      <KnownTechs techs = {PageData.knownTechs}/>
      <Highlightedprojects/>
      <WorkExperience/>
      <ContactForm/>
      <Footer/>
      <BackToTop/>
    </>
  )
}
