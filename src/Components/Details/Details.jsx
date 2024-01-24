import React, { useContext, useEffect, useRef, useState } from 'react'
import "./Details.scss"
import { FaRegCalendarAlt } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { Link, useParams } from 'react-router-dom';
import { MovieContext } from "../../context/moviecontext"
import no_poster from "../../assets/no-poster.png"
import { BookShow } from "../index";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Details = () => {
    const { data } = useContext(MovieContext);
    const { id } = useParams();
    const { show } = data.find((e) => e.show.id == Number(id))
    const summary = useRef(null)
    const [showTicket, setShowTicket] = useState(false)
    useEffect(() => {
        summary.current.innerHTML = show?.summary;
    }, [summary])

    if (showTicket) {
        return (
            <BookShow data={show} setShowTicket={setShowTicket} />
        )
    }

    return (
        <div className='details'>
            
            {
                show ? <>
                    
                    <div className="image">
                        <LazyLoadImage
                            // alt={image.alt}
                            effect="blur"
                            src={show?.image?.original ?? no_poster} />
                    </div>
                    <div className="description">
                        <h2>{show?.name}</h2>
                        <table>
                            <tr>
                                <th>type</th>
                                <td>{show?.type}</td>
                            </tr>
                            <tr>
                                <th>Rating</th>
                                <td>
                                    <span className="rating-bar">
                                        <div className="rate" style={{ width: `${show?.rating?.average}` * 10 }}></div>
                                        <div className="number">{show?.rating?.average}</div>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <th>language</th>
                                <td>{show?.language}</td>
                            </tr>
                            <tr>
                                <th>Genres</th>
                                <td>
                                    {
                                        show?.genres?.map((e, i) => (<span key={i}>{e}</span>))
                                    }
                                </td>

                            </tr>
                        </table>


                        <div className='summary' ref={summary}>
                        </div>
                        <Link to={show?.url}>Read More...</Link>

                        <div className="schedule">
                            <FaRegCalendarAlt />
                            <span className='time'>{show?.schedule?.days[0] ?? "Not show availables"} {show.schedule.time ?? "Not show availables"}</span>
                        </div>

                        <button onClick={() => setShowTicket(true)} disabled={show.schedule.time == ""}>Book Show</button>

                    </div>
                </> : <>
                    <h1>Loading...</h1>
                </>
            }


        </div>
    )
}

export default Details
