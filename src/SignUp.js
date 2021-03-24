import React from 'react';
import "./SignUp.css";
import {useHistory} from "react-router-dom";
import firebase from "firebase";
import {auth} from "./Firebase";

function SignUp() {
  
    const history = useHistory();

    const handleHome = () =>{
        history.push("/");
    }


    const handleSignup = () => {
         
        const googleAuth = new firebase.auth.GoogleAuthProvider();
         
        firebase.auth().signInWithPopup(googleAuth); 
    }

    return (
        <div className="signup">
            <button onClick={handleHome}> Home </button>
            <div className="main__body">
                  <h1>Join Blogging</h1>
                  <p> Create an account to personalize your </p>
                  <p> homepage, follow your favorite authors and </p>
                  <p> publications, applaud stories you love, and more. </p>

                  <div id="image__div">
                      <img src="https://blog.hubspot.com/hubfs/image8-2.jpg"/>
                      <button onClick={handleSignup}> Sign up with Google </button>
                  </div>
                  
                  <p id="item"> Already have an account? </p>

                  <div id="image__div">
                      <img src="https://blog.hubspot.com/hubfs/image8-2.jpg"/>
                      <button onClick={handleSignup} > Sign in </button>
                  </div>
                  

                  <p> To make Blogging work, we log user data and share it with </p>
                  <p> service providers. Click “Sign up” above to accept Blogging’s </p>
                  <p> Terms of Service & Privacy Policy. </p>
            </div>
        </div>
    )
}

export default SignUp
