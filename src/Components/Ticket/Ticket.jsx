import React, { useContext } from 'react'
import "./Ticket.scss"
import { TiTicket } from "react-icons/ti";
import barcode from "../../assets/barcode.png"
import { MovieContext } from '../../context/moviecontext';


const Ticket = () => {
    const { ticket } = useContext(MovieContext)
    const { name, seat, show, time } = ticket;
    return (
        <div className='ticket-container'>
            <div className="myticket">
                <div className="top">
                    <TiTicket />
                    <h3>MOVIE TICKET</h3>
                </div>

                <div className="middle">
                    <div>
                        <h4>NAME</h4>
                        <h3>{name}</h3>
                    </div>
                    <div>
                        <h4>SEATS</h4>
                        <h3>{seat}</h3>
                    </div>
                    <div>
                        <h4>SHOW</h4>
                        <h3>{show}</h3>
                    </div>
                    <div>
                        <h4>TIME</h4>
                        <h3>{time}</h3>
                    </div>
                </div>

                <img className='barcode' src={barcode} alt="" />

            </div>
        </div>
    )
}

export default Ticket
