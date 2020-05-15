import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
/* import Helmet from 'react-helmet'*/
import Feladat from '../components/feladat'
import Dropzone from '../components/dropzone'
import Layout from '../components/layout'


class RootIndex extends React.Component {
  render() {
      /* const siteTitle = get(this, 'props.data.site.siteMetadata.title')
       * const posts = get(this, 'props.data.allContentfulBlogPost.edges')
       * const [author] = get(this, 'props.data.allContentfulPerson.edges')*/
      const feladat = get(this, 'props.data.allContentfulFeladat.edges')
      return (
          <Layout location={this.props.location}>
              <div style={{ background: '#fff' }}>
                  <div className="wrapper">
                      {feladat.map(({ node}) => {
                           console.log(node)
                           return (
                                   <Feladat data={node} key={node.id} />
                           )
                      })}

                      <Dropzone/>
                          {/* <h2 className="section-headline">Recent articles</h2>
                              <ul className="article-list">
                              {posts.map(({ node }) => {
                              return (
                              <li key={node.slug}>
                              <ArticlePreview article={node} />
                              </li>
                              )
                              })}
                              </ul> */}
                      </div>
                  </div>
          </Layout>
      )
  }
}

export default RootIndex

export const pageQuery = graphql`
query HomeQuery {
    allContentfulFeladat(limit:2) {
        edges {
            node {
                cim
                szint
                torzs {
                    childMarkdownRemark {
                        html
                    }
                }
                id
            }
        }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
