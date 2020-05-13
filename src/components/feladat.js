import React from 'react'
import Img from 'gatsby-image'

import styles from './hero.module.css'

export default ({ data }) => (
    <div className={styles.hero}>
      <h3 className={styles.heroHeadline}>{data.cim}</h3>
      <div className={styles.heroDetails}>
      <p>{data.torzs}</p>
      </div>
    </div>
)
