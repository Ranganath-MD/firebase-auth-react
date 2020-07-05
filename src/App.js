import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"

// components
import Header from "./components/Header"
import Form from "./components/Form"
import Home from "./components/Home"
import Dashboard from "./components/Dashboard"
import { fire } from './components/fire';

const App = () => {
  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    authListener()
  }, [isAuth, user])

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
        setIsAuth(true)
      } else {
        setUser(null)
        setIsAuth(false)

      }
    })
  }

  const handleLogout = () => {
    fire.auth().signOut()
      .then(() => {
        setIsAuth(false)
       })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <BrowserRouter>
      <Header
        isAuth={isAuth}
        handleLogout={handleLogout}
      />
        <div className="App">
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/dashboard" render={() => isAuth ? <Dashboard user={user} /> : <Redirect to="/register" />} exact/>
            <Route path="/register" render={() => <Form isAuth={isAuth}/>} exact/>
          </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
