import React from 'react'

export default class PrintButton extends React.Component {

  componentDidMount() {
    var jsPDF = require('jspdf')
    this.doc = new jsPDF();
    console.log(jsPDF)
    console.log(this.doc)
  }
    onClick = event => {
      event.preventDefault()

      console.log(this.printarea.current)
      var elementHTML = this.printarea.current;
      var specialElementHandlers = {
        '#elementH': function (element, renderer) {
          return true;
        }
      };
      this.doc.fromHTML(elementHTML, 15, 15, {
        'width': 170,
        'elementHandlers': specialElementHandlers
      });

      // Save the PDF
      this.doc.save('sample-document.pdf');


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
