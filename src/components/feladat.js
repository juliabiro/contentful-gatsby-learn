import React from 'react'
import Img from 'gatsby-image'

import styles from './feladat.module.css'


export default ({ data }) => (
    <div className={styles.feladat}>
    <h3 className={styles.previewTitle}>{data.cim}</h3>
    <div  dangerouslySetInnerHTML={{
      __html: data.torzs.childMarkdownRemark.html,
    }}/>
    <p> {data.szint}</p>
    </div>
)
