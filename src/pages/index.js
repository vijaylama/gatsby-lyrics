import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image";

import Layout from "../components/layout"

const IndexPage = ({ data }) => (
  <Layout>
    <ul>
      {data.allStrapiSong.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>
              {document.node.name}
            </Link>
          </h2>
          {document.node.artists.map(artist => (
            <div key={artist.id}>
              <h4>{artist.name}</h4>
              <Img fixed={artist.image.childImageSharp.fixed} />
            </div>
          ))}
          <h5>Added By: {document.node.addedBy.username}</h5>
          <p>{document.node.content}</p>
        </li>
      ))}
    </ul>

    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage;

export const pageQuery = graphql`
query IndexQuery {
    allStrapiSong {
    edges {
      node {
        id
        created_at
        name
        content
        artists {
          id
          name
          image{
            childImageSharp{
              fixed(width: 80, height: 80){
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
        addedBy {
          username
          id
        }
      }
    }
}
}
`
