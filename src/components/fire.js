import firebase from "firebase"

// Initiailizing the firebase
const firebaseConfig = {
    apiKey: "AIzaSyB07pinfOsoVLkaVNJbtNPilJqap7G0eDc",
    authDomain: "fireauth-react.firebaseapp.com",
    databaseURL: "https://fireauth-react.firebaseio.com",
    projectId: "fireauth-react",
    storageBucket: "fireauth-react.appspot.com",
    messagingSenderId: "912316917095",
    appId: "1:912316917095:web:c9c2d7888982365c993bc2",
    measurementId: "G-373SVRB4EG"
};

export const fire = firebase.initializeApp(firebaseConfig)