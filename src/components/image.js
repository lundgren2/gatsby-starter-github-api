import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "github-gatsby.png" }) {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <a href="https://github.com/lundgren2/gatsby-starter-github-api">
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </a>
    )}
  />
)
export default Image
