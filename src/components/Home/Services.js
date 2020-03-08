import React from 'react'
import Title from '../Title'
import styles from '../../css/services.module.css'
import services from '../../constants/Services'

const Services = () => {
  return (
    <section className={styles.services}>
      <Title title="our" subTitle="services" />
      <div className={styles.center}>
        {services.map((item, i) => (
          <article key={i} className={styles.service}>
            <span>{item.icon}</span>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
