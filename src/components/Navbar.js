import React, { useState } from 'react'
import { Link } from 'gatsby'
import { FaAlignRight } from 'react-icons/fa'

import styles from '../css/navbar.module.css'
import navLinks from '../constants/Links'
import socialLinks from '../constants/SocialLinks'
import logo from '../images/logo.svg'

const Navbar = () => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt="logo" />
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {navLinks.map((item, i) => (
            <li key={i}>
              <Link to={item.path}>{item.text}</Link>
            </li>
          ))}
        </ul>
        <div className={styles.navSocialLinks}>
          {socialLinks.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
