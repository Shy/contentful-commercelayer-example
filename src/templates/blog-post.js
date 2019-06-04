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
          </div>
        </div>

// <div>
//     <hr/>
//     <CLayer.Price skuCode="{post.commerceLayerSku.code}"/>
//     <hr/>
//     <CLayer.AvailabilityMessage
//       availableTemplate={
//         <div>
//           Available in <CLayer.AvailabilityMessageMinDays />-<CLayer.AvailabilityMessageMaxDays /> days with <CLayer.AvailabilityMessageShippingMethodName /> (<CLayer.AvailabilityMessageShippingMethodPrice/>)
//         </div>
//       }
//       unavailableTemplate={
//         <p>The selected SKU is not available</p>
//       } />
//     <hr/>
//     <CLayer.AddToBag />
//     <hr/>
//     <CLayer.ShoppingBagItemsCount />
//     <CLayer.ShoppingBagSubtotal />
//     <CLayer.ShoppingBagShipping />
//     <CLayer.ShoppingBagPayment />
//     <CLayer.ShoppingBagDiscount />
//     <CLayer.ShoppingBagTaxes />
//     <CLayer.ShoppingBagTotal />
//     <hr/>
//     <CLayer.ShoppingBagItems
//       itemTemplate={
//         <div>
//           <CLayer.ShoppingBagItemImage />
//           <CLayer.ShoppingBagItemName />
//           <CLayer.ShoppingBagItemUnitAmount />
//           <CLayer.ShoppingBagItemQtyContainer />
//           <CLayer.ShoppingBagItemRemove />
//           <CLayer.ShoppingBagItemTotalAmount />
//         </div>
//       }
//     />
//     <hr/>
//     <CLayer.Checkout/>
//     <hr/>
//     <CLayer.Config
//       baseUrl="https://contentful-sticker-store.commercelayer.io"
//       clientId="9c1f3ca3a5773df648349cd5c389ad766f42a8326ef7dac32d91b0f40519494e"
//       marketId="823"
//       countryCode="US"
//       languageCode="EN"
//       cartUrl="https://example.com/cart"
//       returnUrl="https://example.com/return"
//       privacyUrl="https://example.com/privacy"
//       termsUrl="https://example.com/terms"/>
//   </div>



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
