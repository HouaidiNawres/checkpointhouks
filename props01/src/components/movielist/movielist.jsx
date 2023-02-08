import React from 'react'
import moviecard from '../moviecard/moviecard'
import './movielist.css'

const movieliste = () => {
  return (
    <div>
 {
  movies.map((movie)=>{

return <moviecard movie={movie} />
  })
 }
    </div>
  )
}

export default movieliste
