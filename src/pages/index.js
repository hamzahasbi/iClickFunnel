import React from "react"

import Layout from "../components/Layout"
import SEO, {JsonLd} from "../components/SEO"
import ValueProp from "../components/ValueProp"
import ProductBenefits from "../components/ProductBenefits"
import ProductFeatures from "../components/ProductFeatures"
import Testimonials from "../components/Testimonials"
import CallToAction from "../components/CallToAction"
import PricingWrapper from "../components/PricingWrapper"

const IndexPage = () => (
  <Layout>
    <SEO title="Welcome" />
    <JsonLd>
          {{
            '@context': 'https://schema.org',
            '@type': 'Organization',
            url: 'https://easy-animate.com',
            name: 'Easy Animate',
            email: `${MAILTO}`,
          }}
    </JsonLd>
    <ValueProp />
    <ProductBenefits />
    <ProductFeatures />
    <PricingWrapper />
    <Testimonials />
    <CallToAction />
  </Layout>
)

export default IndexPage
