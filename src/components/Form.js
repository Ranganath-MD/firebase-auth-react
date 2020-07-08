import React, { useState } from 'react'
import logo from '../logo.svg';
import { useForm } from "react-hook-form";
import "./form.css"
import { Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// firebase imports
import { fire } from './fire';
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

const Form = ({ isAuth }) => {
    const [loading, setLoading] = useState(false)
    const { errors, register, handleSubmit } = useForm();

    // initializing the auth providers
    const uiConfig = {
        signInFlow: "popup",
        signInSuccessUrl: '/dashboard',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccessWithAuthResult: function (authResult, redirectUrl) {
                return false;
            },
        }
    }

    const onSubmit = data => {
        setLoading(true)
        fire.auth().signInWithEmailAndPassword(data.email, data.password)
            .then(() => {
                setLoading(false)
            })
            .catch(() => {
                fire.auth().createUserWithEmailAndPassword(data.email, data.password)
                    .then(() => {
                        setLoading(false)
                    })
                    .catch(err => {
                        toast.error(err.message);
                        setLoading(false)
                    })
            })
    }

    if (isAuth) {
        return <Redirect to="/dashboard" />
    }

    return (
        <div className="container">
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div >
                <img src={logo} className="App-logo" alt="logo" />
            </div>

            {/* Providers */}
            <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={fire.auth()}
            />
            <div className="separator"></div>
            {/* login with email and password  */}
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="form"
            >
                <div className="input-container" >
                    <input
                        name="email"
                        placeholder="Enter your email"
                        type="text"
                        ref={register({
                            required: `Email required`,
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address"
                            }
                        })}
                    />
                    {errors.email && <p className="errors">{errors.email.message}</p>}
                </div>
                <div className="input-container">
                    <input
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        ref={register({
                            minLength: {
                                value: 6,
                                message: "Password must be greater than equal to 6 character"
                            },
                            maxLength: 128,
                            required: `Password Required`
                        })}
                    />
                    {errors.password && <p className="errors">{errors.password.message}</p>}
                </div>
                <input
                    type="submit"
                    className="submit-btn"
                    value={loading ? `Loading...` : `Submit`}
                />
            </form>
        </div>
    )
}

export default Form
