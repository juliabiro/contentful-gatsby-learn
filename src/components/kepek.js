import Img from 'gatsby-image'
import React from 'react'

export default function renderKepek(kepek) {
  console.log(kepek)
  if (kepek==null) {
    return (<div></div>)
  }

return(kepek.map( k =>
                  <Img
                  alt={k.title}
                  fluid={k.fluid}
                  key={k.title}
                  />
                )
      )
}
