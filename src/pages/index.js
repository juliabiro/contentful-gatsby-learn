import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Feladat from '../components/feladat'
import Layout from '../components/layout'
import {enable_dragging} from '../components/dropping.js'
import Printing from '../components/printtopdfbutton.js'

class RootIndex extends React.Component {
  componentDidMount() {
        enable_dragging()
  }
  render() {
      /* const siteTitle = get(this, 'props.data.site.siteMetadata.title')
       * const posts = get(this, 'props.data.allContentfulBlogPost.edges')
       * const [author] = get(this, 'props.data.allContentfulPerson.edges')*/
      const feladat = get(this, 'props.data.allContentfulFeladat.edges')
      return (
          <Layout location={this.props.location}>
              <div style={{ background: '#fff' }}>
                  <div className="wrapper">
                      <div className="startzone">
                      {feladat.map(({ node}) => {
                           console.log(node)
                           return (
                                   <Feladat data={node} key={node.id} />
                           )
                      })}
                      </div>
                      <Printing/>
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
    allContentfulFeladat(limit:20) {
        edges {
            node {
                id
                cim
                szint
                torzs {
                    childMarkdownRemark {
                        html
                    }
                }
                szerzo {
                    nev
                }
                cimkek{
                    childMarkdownRemark {
                        html
                    }
                }
                kepek {
                    title
                    fluid(
                    maxWidth: 300,
                    resizingBehavior: SCALE,
                        background: "rgb:000000",
                        quality: 100,

                    ) {
                        ...GatsbyContentfulFluid
                    }
                }
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
              fluid(maxWidth: 350, resizingBehavior: SCALE, quality:100) {
              ...GatsbyContentfulFluid
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
