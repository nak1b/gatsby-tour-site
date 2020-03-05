import React from 'react'
import { Link } from 'gatsby'
import { Layout, Hero, Banner } from '../components/'

export default () => {
  return (
    <Layout>
      <Hero>
        <Banner
          title="Continue exploring"
          info="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        >
          <Link to="/tours" className="btn-white">
            Explore tours
          </Link>
        </Banner>
      </Hero>
    </Layout>
  )
}
