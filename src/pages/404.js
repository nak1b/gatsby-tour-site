import React from 'react'
import { Link } from 'gatsby'
import { Layout, Banner } from '../components/'
import styles from '../css/error.module.css'

export default function Error404() {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="Oops! it's a dead end">
          <Link to="/" className="btn-white">
            Back to home page
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}
