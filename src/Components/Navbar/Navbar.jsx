import React from 'react'
import "./Navbar.scss"
import logo from "../../assets/logo.png"
import { GrTicket } from "react-icons/gr";
import { NavLink, useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate()
    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="" onClick={() => navigate("/")} />
            </div>
            <div className="links">
                <NavLink className={"activenav"} to={"/"}>Movies</NavLink>
                {
                    localStorage.getItem("ticket") && <NavLink to="/ticket" className={"ticket"}><GrTicket /></NavLink>
                }

            </div>

        </nav>
    )
}

export default Navbar
