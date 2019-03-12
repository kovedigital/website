import React from 'react';
import Flex from '@ninetynine/react-flex';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Navigation from '../components//navigation';

const IndexPage = () => (
  <Layout>
    <Navigation></Navigation>
    <SEO keywords={[`gatsby`, `application`, `react`]} />
    <Flex page column className="splash">
      <h1>Kove</h1>
      <p>Web Design and development based in Stafford, Staffordshire.</p>
      <a href="mailto:jared@kove.digital" className="btn btn-primary">Get in touch</a>
    </Flex>
  </Layout>
)

export default IndexPage
