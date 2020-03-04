import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

export default () => {
  return (
    <Layout>
      Hello world!
      <Link to="/blog/">Go to blog</Link>
    </Layout>
  )
}
