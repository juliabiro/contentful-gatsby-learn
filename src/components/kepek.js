import Img from 'gatsby-image'
import React from 'react'

export default function renderKepek(kepek) {
  console.log(kepek)
  if (kepek==null) {
    return (<div></div>)
  }

  return(kepek.map( k =>
                    <img key={k.title} src={k.fluid.src} alt={k.title} witdh="200px"/>
                )
      )
}
