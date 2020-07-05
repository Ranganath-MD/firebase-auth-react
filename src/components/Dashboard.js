import React from 'react'


const Dashboard = ({ user }) => {
    return (
        <div style={{
            display: `flex`,
            minHeight: `60vh`,
            flexDirection: `column`,
            alignItems: `center`,
            justifyContent: `center`
        }}>
            <h2 style={{
                fontSize: `2.5rem`,
                fontWeight: 600,
                textAlign: `center`,
                color: `white`
            }}>You are Signed in as </h2>
            <p style={{
                fontWeight: 600,
                textAlign: `center`,
                color: `white`
            }}>{user && user.email}</p>
        </div>
    )
}

export default Dashboard
