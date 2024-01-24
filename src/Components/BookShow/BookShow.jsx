import React, { useState, useContext } from 'react'
import "./BookShow.scss"
import { FaRegCircleXmark } from "react-icons/fa6";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { MovieContext } from '../../context/moviecontext';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const BookShow = ({ data, setShowTicket }) => {
  let { setTicket } = useContext(MovieContext);
  const [name, setName] = useState("")
  const [seat, setSeat] = useState("")


  const [booked, setBooked] = useState(false)
  const navigate = useNavigate()

  const handleBook = () => {
    toast.success("Ticket Book succesfully!");
    let ticket = { name, seat, show: data.name, time: data.schedule.time };
    localStorage.setItem("ticket", JSON.stringify(ticket))
    setTicket(ticket)
    setBooked(true)
    setTimeout(() => navigate("/"), 3000)
  }

  return (
    <div className='book-show'>
      <Toaster />
      <FaRegCircleXmark onClick={() => setShowTicket(false)} className='closeIcon' />
      <div className='ticket'>
        <div className="top">
          <div className="left">
            <h3>{data?.name}</h3>
            <p>{data?.genres.map(e => e).join(" ")}</p>
            <small>{data?.language} {data?.type}</small>
          </div>
          <div className="right">
           
            <LazyLoadImage
        // alt={image.alt}
        effect="blur"
        src={data?.image?.medium ?? noposter} />
          </div>
        </div>
        <div className="middle">
          <div>
            <small>Day</small>
            <p>{data?.schedule?.days[0]}</p>
          </div>
          <div>
            <small>Time</small>
            <p>{data?.schedule?.time}</p>
          </div>
          <div>
            <small>Rating</small>
            <p>{data?.rating?.average ?? "Not Given"}</p>
          </div>
          <div>
            <small>Contry</small>
            <p>{data?.network?.country?.name}</p>
          </div>
        </div>


        <div className="userInfo">
          <div className="input">
            <input type="text" name="username" value={name} onChange={(e) => setName(e.target.value)} id="username" required />
            <label htmlFor="username">Enter Your Name</label>
          </div>
          <div className="input">
            <input type="number" onChange={(e) => setSeat(e.target.value)} name="seats" value={seat} id="seats" required />
            <label htmlFor="seats">Number of seats</label>
          </div>
        </div>
        <button onClick={() => handleBook()}>{booked ? "Please Wait..." : "Buy Now"}</button>
      </div>
    </div>
  )
}

export default BookShow
