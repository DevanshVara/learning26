import React from 'react'
import { useParams } from 'react-router-dom'

const TeamDetails = () => {
    let teamName = useParams().detail
  return (
    <div style={{textAlign:'center'}}>
        <h1>Details of Team</h1>
        <h3>Playing...{teamName}</h3>
    </div>
  )
}

export default TeamDetails
