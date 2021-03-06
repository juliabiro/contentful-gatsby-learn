import interact from 'interactjs'

function dragMoveListener (event) {
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  //translate the element
  target.style.webkitTransform =
    target.style.transform =
    'translate(' + x + 'px, ' + y + 'px)'

  // update the posiion attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}

export function enable_dragging() {

interact('.draggable')
  .draggable({
    inertia: true,
    modifiers: [
      interact.modifiers.restrictRect({
        endOnly: true
      })
    ],
    autoScroll: true,
    // dragMoveListener from the dragging demo above
    listeners: { move: dragMoveListener
               },
  }
)

interact('.dropzone').dropzone({
  // only accept elements matching this CSS selector
  // Require a 75% element overlap for a drop to be possible
  accept: '.draggable',
  overlap: 0.75,

  // listen for drop related events:

  ondropactivate: function (event) {
    // add active dropzone feedback
    event.target.classList.add('drop-active')
  },
  ondragenter: function (event) {
    var draggableElement = event.relatedTarget
    var dropzoneElement = event.target

    // feedback the possibility of a drop
    dropzoneElement.classList.add('drop-target')
    draggableElement.classList.add('can_drop')
    // draggableElement.textContent = 'Dragged in'
    draggableElement.classList.remove('dropped')
  },
  ondragleave: function (event) {
    // remove the drop feedback style
    var draggableElement = event.relatedTarget
    var dropzoneElement = event.target
    dropzoneElement.classList.remove('drop-target')
    draggableElement.classList.remove('can_drop')
    // event.relatedTarget.textContent = 'Dragged out'
  },
  ondrop: function (event) {
    var dropzoneElement = event.target
    var draggableElement = event.relatedTarget
      dropzoneElement.appendChild(draggableElement)
      draggableElement.classList.add('dropped')
      //console.log(event)
    // event.relatedTarget.textContent = 'Dropped'
  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    event.target.classList.remove('drop-active')
    event.target.classList.remove('drop-target')
  },
})

  interact('.startzone').dropzone({
  // only accept elements matching this CSS selector
  // Require a 75% element overlap for a drop to be possible
  accept: '.draggable',
  overlap: 0.75,

  // listen for drop related events:

  // ondropactivate: function (event) {
  //   // add active dropzone feedback
  //   event.target.classList.add('drop-active')
  // },
  ondragenter: function (event) {
    var draggableElement = event.relatedTarget
    var dropzoneElement = event.target

    // feedback the possibility of a drop
    dropzoneElement.classList.add('park-target')
    draggableElement.classList.add('can_park')
    // draggableElement.textContent = 'Dragged in'
    //draggableElement.classList.remove('dropped')
  },
  ondragleave: function (event) {
    // remove the drop feedback style
    var draggableElement = event.relatedTarget
    var dropzoneElement = event.target
    dropzoneElement.classList.remove('park-target')
    draggableElement.classList.remove('can_park')
    // event.relatedTarget.textContent = 'Dragged out'
  },
  ondrop: function (event) {
    var dropzoneElement = event.target
    var draggableElement = event.relatedTarget
    dropzoneElement.appendChild(draggableElement)
    draggableElement.style=null
    draggableElement.classList.add('parked')
    console.log(event)
    // event.relatedTarget.textContent = 'Dropped'
  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    event.target.classList.remove('park-active')
    event.target.classList.remove('park-target')
  },
})
}
