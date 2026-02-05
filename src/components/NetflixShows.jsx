import React from 'react'
import { Link } from 'react-router-dom'

const NetflixShows = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>NetflixShows</h1>
      <ul>
        <li><Link to="/watch/moneyheist">Money Heist</Link></li>
        <li><Link to="/watch/breakingbad">Breaking Bad</Link></li>
        <li><Link to="/watch/strangerthings">Stranger Things</Link></li>
      </ul>
    </div>
  )
}

export default NetflixShows
