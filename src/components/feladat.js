import React from 'react'
import styles from './feladat.module.css'
import renderKepek from './kepek.js'


export default class Feladat extends React.Component {
    render() {
        return (
            <div className={`draggable drag_drop ${styles.feladat}`} >
                <h3 className={styles.previewtitle}>{this.props.data.cim}</h3>
                <div dangerouslySetInnerHTML={{
                    __html: this.props.data.torzs.childMarkdownRemark.html,
                }}/>

                <div>{renderKepek(this.props.data.kepek)}</div>
                <p> {this.props.data.szint}</p>
            </div>
        )
    }
}
