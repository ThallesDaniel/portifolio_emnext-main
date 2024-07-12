import { HorizontalDivider } from "@/app/components/divider/horizontal"
import { SectionTitle } from "@/app/components/section-title"

export const Highlightedprojects = () =>{
    return (
        <section className="container py-16">
            <SectionTitle subtitle="destaques" title="Projetos em Destaques" />
            <HorizontalDivider className="mb-16"/>
        </section>
    )

}