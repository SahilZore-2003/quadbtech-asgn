import React, { useContext } from 'react'
import "./Movies.scss"
import { MovieCard } from "../index"
import { MovieContext } from "../../context/moviecontext"
const Movies = () => {
  const { data } = useContext(MovieContext)
  return (
    <section className='movies'>
      <h1>Movies</h1>

      <div className="container">
        {
          data.map(e => (<MovieCard key={e.show.id} id={e.show.id} name={e?.show?.name} img={e?.show?.image?.original} />))
        }


      </div>
    </section>
  )
}

export default Movies
