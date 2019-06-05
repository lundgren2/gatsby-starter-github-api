import React from "react"
import { graphql } from "gatsby"

import Repository from "../components/repository"
import Layout from "../components/layout"
import Avatar from "../components/avatar"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const {
    name,
    avatarUrl,
    isHireable,
    repositories,
  } = data.githubData.data.viewer

  return (
    <Layout>
      <SEO title={`${name} repos`} />
      <div style={{ maxWidth: `960px`, marginBottom: `1.45rem` }}>
        <div style={{ maxWidth: `480px`, margin: `0px auto` }}>
          <Image />
        </div>
        <div
          style={{
            display: `flex`,
            alignItems: `center`,
            margin: `1.45rem 0`,
          }}
        >
          <Avatar img={avatarUrl} />
          <div style={{ padding: 16 }}>
            <h2 style={{ border: `none` }}>{name}</h2>
            {isHireable && (
              <h3 style={{ marginBottom: 0 }}>
                I'm Hireable{" "}
                <span role="img" aria-label="hand">
                  👋
                </span>
              </h3>
            )}
          </div>
        </div>
        {repositories.nodes
          .map(repo => <Repository key={repo.name} repo={repo} />)
          .reverse()}
      </div>
    </Layout>
  )
}

export default IndexPage

export const gitHubQuery = graphql`
  {
    githubData {
      data {
        viewer {
          name
          avatarUrl
          isHireable
          repositories {
            nodes {
              name
              description
              homepageUrl
              resourcePath
              forkCount
              createdAt
              updatedAt
              languages {
                edges {
                  node {
                    name
                    color
                  }
                }
              }
              licenseInfo {
                name
              }
              stargazers {
                totalCount
              }
            }
          }
        }
      }
    }
  }
`
