import React from 'react'

export default class PrintButton extends React.Component {

  componentDidMount() {
    var jsPDF = require('jspdf')
    this.doc = new jsPDF('p', 'pt', 'a4');
  }
  onClick = event => {
    event.preventDefault()

    console.log(this.printarea.current)
    var elementHTML = this.printarea.current;
    // TODO needs base64 encoding, otherwise images break it



    var specialElementHandlers = {
      '#elementH': function (element, renderer) {
        return true;
      }
    }

    var doc = this.doc;
    doc.fromHTML(elementHTML, 15, 15, {
      'width': 170,
      'elementHandlers': specialElementHandlers
    },

                      function () {
                        doc.save()
                      }
                     )

  }

  constructor(props) {
    super(props);
    this.printarea = React.createRef();
    this.onClick = this.onClick.bind(this)
  }

    render() {
      return (
        <div>
          <button onClick={this.onClick}>Print to PDF</button>
          <div className="dropzone"  ref={this.printarea}></div>
        </div>
      )
    }
  }
