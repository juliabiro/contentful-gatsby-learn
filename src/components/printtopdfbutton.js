import React from 'react'

export default class PrintButton extends React.Component {
    handleClick = event => {
      event.preventDefault()
      console.log("button pushed")
      alert("Button pushed")
    }

    render() {
      return (
          <button onClick={this.handleClick}>Print to PDF</button>
      )
    }
  }
