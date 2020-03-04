import React from 'react'
import { Link } from 'gatsby'

import styles from '../css/footer.module.css'
import navLinks from '../constants/Links'
import socialLinks from '../constants/SocialLinks'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {navLinks.map((item, i) => (
          <Link key={i} to={item.path}>
            {item.text}
          </Link>
        ))}
      </div>
      <div className={styles.icons}>
        {socialLinks.map((item, i) => (
          <a key={i} href={item.url} target="_blank" rel="noopener noreferrer">
            {item.icon}
          </a>
        ))}
      </div>
      <div className={styles.copyright}>
        copyright backroad travel company {new Date().getFullYear()} All rights
        reserved
      </div>
    </footer>
  )
}

export default Footer
