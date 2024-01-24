import React from 'react'
import "./MovieCard.scss"
import noposter from "../../assets/no-poster.png"
import { useNavigate } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const MovieCard = ({ name, img, id }) => {
  const navigate = useNavigate()
  return (
    <div className='movie-card' onClick={() => { navigate(`/details/${id}`); window.scrollTo(0, 0) }}>
      <LazyLoadImage
        // alt={image.alt}
        effect="blur"
        src={img ?? noposter} />
      <h3>{name}</h3>
    </div>
  )
}

export default MovieCard
