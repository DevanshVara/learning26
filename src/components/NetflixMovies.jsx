import React from 'react'
import { Link } from 'react-router-dom';

const NetflixMovies = () => {

  let movies = [
    {movieId: 1, movieName: "Dhurandhar"}, {movieId: 2, movieName: "Kill"}, {movieId: 3, movieName: "Kantara"}, 
  ];
  return (
    <div style={{textAlign:'center'}}>
      <h1>NetflixMovies</h1>
      {
        movies.map((movie) => {
          return <li><Link to={`/watch/${movie.movieName}`}>{movie.movieName}</Link></li>
        })
      }
    </div>
  )
}

export default NetflixMovies
