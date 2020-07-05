import React from 'react'
import FirebaseImage from "../firebase.svg"
const Home = () => {
    return (
        <div style={{
            display: `flex`,
            minHeight: `60vh`,
            flexDirection: `column`,
            alignItems: `center`,
            justifyContent: `center`
        }}>
            <div style={{
                width: 100
            }}>
                <img
                    src={FirebaseImage}
                    alt="firebase-----"
                    width="100%"/>
            </div>
            <h2 style={{
                fontSize: `2.5rem`,
                fontWeight: 600,
                textAlign: `center`,
                color: `white`
            }}>Firebase Authentication</h2>
        </div>
    )
}

export default Home
