import React from 'react'
import ReactStars from "react-stars";

const moviecard = (movie) => {
  return (
    <div >
      <h1>{movie.title}</h1>
      <img src={movie.img} alt ={movie.title} width="40ppx" height="400px" />
      <p>{movie.description}</p>
      <ReactStars
  count={5},
  onChange={ratingChanged},
  size={24},
  color2={'#ffd700'} value={movie.rating} edit={false}/>

    </div>
  )
}

export default moviecard

