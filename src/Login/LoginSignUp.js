import React from "react";
import './LoginSignUp.css';

const LoginSignUp = ()=>{
    return (
        <div className="loginSignup">
            <div className="signup">
                <h1>Sign Up</h1>
                <div className="signUp-fields">
                    <input type="text" placeholder="Your name"/>
                    <input type="email" placeholder="Email Address"/>
                    <input type="password" placeholder="Password"/>
                </div>
                <button>Continue</button>
                <p className="login-signup">Aready have an account? <span>Login here</span></p>
                <div className="agree">
                    <input type="checkbox" name='' id=''/>
                    <p>by continuing, I agree to the terms of use & privacy</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignUp;