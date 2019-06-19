import React from 'react'
import * as CLayer from 'commercelayer-react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import heroStyles from '../components/hero.module.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulProductItem')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const availabilityMessage = "availability-message-".concat(post.commerceLayerSku.code)

    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>

          <Helmet title={`${post.title} | ${siteTitle}`} />
          <div className={heroStyles.hero}>
            <Img className={heroStyles.heroImage} alt={post.title} fluid={post.heroImage.fluid} />
          </div>
          <div className="wrapper">
            <h1 className="section-headline">{post.title}</h1>
            <p
              style={{
                display: 'block',
              }}
            >
            </p>

            <div
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />
            <div>

            Price: <CLayer.Price skuCode={post.commerceLayerSku.code} />

            <CLayer.AddToBag skuCode={post.commerceLayerSku.code}
                           AvailabilityMessageContainerId={availabilityMessage}/>




          <hr/>

          <CLayer.ShoppingBagItems
            itemTemplate={
              <div>
                <CLayer.ShoppingBagItemName />
                <CLayer.ShoppingBagItemUnitAmount />
                <CLayer.ShoppingBagItemQtyContainer />
                <CLayer.ShoppingBagItemRemove />
                <CLayer.ShoppingBagItemTotalAmount />
              </div>
            }
          />

          <hr/>

          <CLayer.Checkout/>

          <hr/>

          <CLayer.AvailabilityMessageUnavailableTemplate
            unavailableTemplate={
              <p>Not Available</p>
            }
          />


        </div>




        </div>
        </div>

      </Layout>


    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulProductItem(slug: { eq: $slug }) {
      title
      commerceLayerSku {
        code
      }
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
