import type { RichTextContent } from '@graphcms/rich-text-types'
import { KnownTech, Technology } from './projects'

export type WorkExperience = {
  companyLogo: {
    url: string
  }
  role: string
  companyName: string
  companyUrl: string
  startDate: string
  endDate: string
  technologies: KnownTech[]
  // technologies: Technology[]
  description: {
    raw: RichTextContent
  }
}