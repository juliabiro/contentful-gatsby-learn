import React from 'react'
import jsPDF from 'jspdf'

export default class PrintButton extends React.Component {
    onClick = event => {
      event.preventDefault()
      var doc = new jsPDF();

      console.log(this.printarea.current)
      var elementHTML = this.printarea.current;
      var specialElementHandlers = {
        '#elementH': function (element, renderer) {
          return true;
        }
      };
      doc.fromHTML(elementHTML, 15, 15, {
        'width': 170,
        'elementHandlers': specialElementHandlers
      });

      // Save the PDF
      doc.save('sample-document.pdf');


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
