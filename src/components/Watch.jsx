import React from 'react'
import { useParams } from 'react-router-dom'

const Watch = () => {
  let movieName = useParams().name
  return (
    <div style={{textAlign:'center'}}>
        <h1>WATCHING...{movieName}</h1>
    </div>
  )
}

export default Watch
