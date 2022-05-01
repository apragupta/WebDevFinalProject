import react from 'react'
import './../GameDetails/game.css'
import './login.css'
import React, {useRef} from 'react';
import * as service from '../../services/auth-service'
import {useNavigate} from "react-router-dom";
import {useProfile} from "../../contexts/profile-context";
const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()
    const {signin} = useProfile()


    const handleSignin = async () => {
        console.log(emailRef);
        console.log(passwordRef);
        try {
            await service.signin(
                emailRef.current.value,
                passwordRef.current.value
            )
            navigate("/profile")
        } catch (e) {
            console.log(e);
            alert('Not a valid combination!')
        }
    }

    const handleSignup = async () => {
        navigate('/register')
    }
    return(
        <div>
            <h1 className="mb-4">Login</h1>
            {/*taken from footswatch sample code*/}
            <fieldset className="wd-paragraph-border ">

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>
                    <div className="d-flex justify-content-between">
                         <input ref={emailRef} type="email" className="form-control rounded-pill me-3" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter email"/>
                    </div>

                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                            else.</small>

                </div>

                <div className="form-group mb-4">

                    <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
                    <div className="d-flex justify-content-between">
                        <input type="password" ref={passwordRef} className="form-control rounded-pill me-3" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                </div>
                <div className="d-flex flex-column align-items-center ">
                <div className="d-flex align-items-end flex-column">
                    <button onClick={handleSignin} type="submit" className="btn btn-primary rounded-pill  wd-login-button-size mb-4">Login
                    </button>
                    <label htmlFor="createAccount" className="d-flex flex-column align-items-center">
                        <p className="text-light pe-2">No account?</p>
                        <button onClick={handleSignup}  type="submit" id="createAccount" className="btn btn-primary rounded-pill  wd-login-button-size ">Create Account</button>
                    </label>
                </div>
                </div>

            </fieldset>
        </div>
    )
}

export default Login;