import React from 'react'
import { Link } from 'gatsby'
import Footer from './Footer'
import Navbar from './Navbar'
import '../css/layout.css'

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  )
}

export default Layout
