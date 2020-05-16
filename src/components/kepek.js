import React from 'react'

export default function renderKepek(kepek) {
  console.log(kepek)
  if (kepek==null) {
    return (<div></div>)
  }

  return(
    kepek.map( k => <img src={k.file.url} alt={k.title} key={k.id} height="100" width="100"/>)
  )
}
