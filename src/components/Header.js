import React from 'react'
import { Link } from "react-router-dom"
import "./header.css"

const Heder = ({ isAuth, handleLogout }) => {

    return (
        <div className="header">
            <h2 className="brand">Firereact</h2>
            <ul className="nav">
                {
                    isAuth ?
                        <div>
                            <Link
                                to="/"
                                className="nav-item"
                            >Home</Link>
                            <Link
                                to="/dashboard"
                                className="nav-item"
                            >Dashboard</Link>
                            <button
                                className="logout"
                                onClick={() => handleLogout()}
                            >Logout</button>
                        </div> :
                        <Link
                            to="/register"
                            className="nav-item"
                        >Register/Login</Link>
                }

            </ul>
        </div>
    )
}

export default Heder
