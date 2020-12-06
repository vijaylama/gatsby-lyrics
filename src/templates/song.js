import React from 'react';
import { Link, graphql } from 'gatsby';

import Img from 'gatsby-image';
import Layout from '../components/layout';
import Reactmarkdown from 'react-markdown';

const SongTemplate = ({ data }) => (
    <Layout>

        <h1>{data.strapiSong.name}</h1>
        {data.strapiSong.artists.map(artist => (
            <div key={artist.id}>
                <h4>Singer: {artist.name}</h4>
                <Img fixed={artist.image.childImageSharp.fixed} />
            </div>
        ))}

        <Reactmarkdown source={data.strapiSong.content} />
    </Layout>
);

export default SongTemplate;

export const query = graphql`
    query SongTemplate($id: String!){
        strapiSong(id: {eq: $id}){
            id
            content
            name
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
        }
    }
`