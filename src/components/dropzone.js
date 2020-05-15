import React from 'react'
import styles from './dropzone.module.css'
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

interact('.dropzone').dropzone({
  // only accept elements matching this CSS selector
  // Require a 75% element overlap for a drop to be possible
  accept: '.draggable',
  overlap: 0.75,

  // listen for drop related events:

  ondropactivate: function (event) {
    // add active dropzone feedback
    event.target.classList.add(styles.drop_active)
  },
  ondragenter: function (event) {
    var draggableElement = event.relatedTarget
    var dropzoneElement = event.target

    // feedback the possibility of a drop
    dropzoneElement.classList.add(styles.drop_target)
    draggableElement.classList.add('can_drop')
    // draggableElement.textContent = 'Dragged in'
    draggableElement.classList.remove('dropped')
  },
  ondragleave: function (event) {
    // remove the drop feedback style
    event.target.classList.remove(styles.drop_target)
    event.relatedTarget.classList.remove('can_drop')
    // event.relatedTarget.textContent = 'Dragged out'
  },
  ondrop: function (event) {
    console.log('dropped!')
    var draggableElement = event.relatedTarget
    draggableElement.classList.add('dropped')
    // event.relatedTarget.textContent = 'Dropped'
  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    event.target.classList.remove(styles.drop_active)
    event.target.classList.remove(styles.drop_target)
  }
})

export default () => (
    <div className={`dropzone ${styles.dropzone}`} >
    
    </div>
)
