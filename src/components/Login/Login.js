import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import './Login.css';
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';
import {  useHistory, useLocation } from 'react-router-dom';
import googleIcon from './../../images/google.png'




const Login = () => {

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };


    const handleGoogleSignIN = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
            .then(res => {
                const { displayName, email, photoURL } = res.user;
                const signedInUser = {
                    isSignIn : true,
                    name: displayName, 
                    email:email,
                    photo: photoURL
                };
                setLoggedInUser(signedInUser);
                history.replace(from);
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }
      


    return (
        <section className="container mx-auto row flex-column align-items-center py-1">
            <div className="col-md-6 mt-5">
                    <div className="card text-center mb-4">
                        <h4 className="text-center my-4">Login with</h4>
                        <button onClick={handleGoogleSignIN} className="g-signIn"><img src={googleIcon} alt="" /> Continue with Google </button>
                    </div>
            </div>
        </section>
    );
};

export default Login;