import React, { useContext } from 'react'
import "./Banner.scss"
import { MovieContext } from "../../context/moviecontext"
const Banner = () => {
  const {data} = useContext(MovieContext);
  const random = Math.floor(Math.random() * 9);

  return (
    <div className='banner'>
      <img src={data[random]?.show?.image?.original??"https://static.tvmaze.com/uploads/images/original_untouched/128/321026.jpg"} alt="" />
      <div className="overlay"></div>
      <div className="bannerinfo">
        <h1>{data[random]?.show?.name}</h1>
        <button>Watch Trailer</button>
      </div>
    </div>
  )
}

export default Banner
