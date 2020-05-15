import React from 'react'
import styles from './feladat.module.css'
import interact from 'interactjs'

function dragMoveListener (event) {
    var target = event.target
    // keep the dragged position in the data-x/data-y attributes
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

    // translate the element
    target.style.webkitTransform =
        target.style.transform =
            'translate(' + x + 'px, ' + y + 'px)'

    // update the posiion attributes
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
}

interact('.draggable')
    .draggable({
        inertia: true,
        modifiers: [
            interact.modifiers.restrictRect({
                restriction: 'parent',
                endOnly: true
            })
        ],
        autoScroll: true,
        // dragMoveListener from the dragging demo above
        listeners: { move: dragMoveListener }
    })


export default ({ data }) => (
        <div className={`draggable drag_drop ${styles.feladat}`} >
            <h3 className={styles.previewtitle}>{data.cim}</h3>
            <div dangerouslySetInnerHTML={{
                __html: data.torzs.childMarkdownRemark.html,
            }}/>
            <p> {data.szint}</p>
        </div>
)
