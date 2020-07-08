import React from 'react'
import "./dashboard.css"

const Dashboard = ({ user }) => {
    return (
        <div className="container">
            {
                user.photoURL === null ? null :
                <div className="image-container">
                    <img src={user && user.photoURL} alt="avatar" />
                </div>
            }
            {
                user.displayName === null ?
                    <p> You are Signed in as </p> : <h1>{user && user.displayName}</h1>
            }
            <p>{user && user.email}</p>
        </div>
    )
}

export default Dashboard
