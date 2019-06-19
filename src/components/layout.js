import React from 'react'
import { Link } from 'gatsby'
import base from './base.css'
import Container from './container'
import Navigation from './navigation'
import * as CLayer from 'commercelayer-react'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Container>
        <Navigation />
        <CLayer.Config
    baseUrl="https://the-blue-brand-28.commercelayer.io"
    clientId="f92d732ea49a101a007886228a815a3ae7ac44dadae40845c221901c568d371b"
    marketId="694"
    countryCode="US"
    languageCode="en"
    cartUrl="https://example.com/cart"
    returnUrl="https://example.com/return"
    privacyUrl="https://example.com/privacy"
    termsUrl="https://example.com/terms" />
          {children}
      </Container>
    )
  }
}

export default Template
