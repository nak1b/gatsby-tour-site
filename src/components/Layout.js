import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import '../css/layout.css'

const Layout = ({ children }) => {
  return (
    <main className="main">
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
