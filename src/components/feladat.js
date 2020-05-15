import React from 'react'
import styles from './feladat.module.css'



export default ({ data }) => (
        <div className={`draggable drag_drop ${styles.feladat}`} >
            <h3 className={styles.previewtitle}>{data.cim}</h3>
            <div dangerouslySetInnerHTML={{
                __html: data.torzs.childMarkdownRemark.html,
            }}/>
            <p> {data.szint}</p>
        </div>
)
