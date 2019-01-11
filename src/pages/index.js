import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Kove</h1>
    <p>Web Design and development based in Stafford, Staffordshire.</p>
  </Layout>
)

export default IndexPage
