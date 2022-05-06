import { IGatsbyImageData } from 'gatsby-plugin-image'

export interface IImage {
  url: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
  alt: string
}
