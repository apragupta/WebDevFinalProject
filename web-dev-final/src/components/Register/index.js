import {useState} from 'react'
import './../GameDetails/game.css'
import './login.css'
import React from 'react';
import * as service from '../../services/auth-service'
import {useNavigate} from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import * as Yup from 'yup';

const Register = () => {

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required("Email is required").email(),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters'),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password')], 'Passwords must match'),
        username: Yup.string()
            .required('Username is required')
            .min(4, 'Username must be at least 4 characters'),
        name: Yup.string()
            .required('Name is required'),
        user_role: Yup.string()


    });
    const [userRole,setUserRole] = useState("user")

    const formOptions = { resolver: yupResolver(validationSchema), mode: "onChange" };
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;
    const navigate = useNavigate()
    const  onSubmit = async(data)  => {

        if(data.user_role != "admin"){
            data.user_role = "user";
        }
        console.log(data)
        try {
            await service.signup(
                data
            )
            navigate('/profile')
        } catch (e) {
            alert('User already exists')
        }
    }

    return(
        <div>
            <h1 className="mb-4">Register</h1>
            {/*taken from footswatch sample code*/}
            <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="wd-paragraph-border ">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>
                    <div className="d-flex justify-content-between">
                         <input name={"Email"} type="text" {...register('email')} className={`form-control rounded-pill me-3 ${errors.email ? 'is-invalid' : ''}`} id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter email"/>
                    </div>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                            else.</small>
                    <div className="invalid-feedback d-block">{errors.email?.message}</div>
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="password" className="form-label mt-4">Password</label>
                    <div className="d-flex justify-content-between">
                        <input name={"password"} type="password" {...register('password')} className={`form-control rounded-pill me-3 ${errors.password ? 'is-invalid' : ''}`} id="password" placeholder="Password"/>
                    </div>
                    <div className="invalid-feedback d-block">{errors.password?.message}</div>
                    <label htmlFor="confirmPassword" className="form-label mt-4">Confirm Password</label>
                    <div className="d-flex justify-content-between">
                        <input name={"confirmPassword"} type="password" {...register('confirmPassword')} className={`form-control rounded-pill me-3 ${errors.confirmPassword ? 'is-invalid' : ''}`} id="confirmPassword" placeholder="Confirm Password"/>
                    </div>
                    <div className="invalid-feedback d-block">{errors.confirmPassword?.message}</div>
                </div>

                <div className="form-group">
                    <label htmlFor="username" className="form-label mt-4">Username</label>
                    <div className="d-flex justify-content-between">
                        <input name={"username"} type="text" {...register('username')} className={`form-control rounded-pill me-3 ${errors.username ? 'is-invalid' : ''}`} id="username"
                               placeholder="Enter Username"/>
                    </div>
                    <div className="invalid-feedback d-block">{errors.username?.message}</div>
                </div>

                <div className="form-group">
                    <label htmlFor="name" className="form-label mt-4">Name</label>
                    <div className="d-flex justify-content-between">
                        <input name={"name"} type="text" {...register('name')} className={`form-control rounded-pill me-3 ${errors.name ? 'is-invalid' : ''}`} id="name"
                               placeholder="Enter Name"/>
                    </div>
                    <div className="invalid-feedback d-block">{errors.name?.message}</div>
                </div>
                <div className="form-group">
                <label htmlFor="user_role" className="form-label mt-4">Would you like Moderator Access?</label>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" {...register('user_role')} name={"user_role"} id="user_role" value={userRole}
                    onChange={(e)=>{setUserRole(e.target.value=="user"? "admin":"user")
                        console.log(e.target.value)
                    }}/>
                        <label className="form-check-label" htmlFor="user_role">Moderator Access</label>
                </div>
                </div>


                <div className="d-flex flex-column align-items-center">
                    <div className="d-flex align-items-center flex-column">
                        <label htmlFor="createAccount" className="d-flex flex-column align-items-center">
                            <button disabled={!formState.isValid} type="submit" id="createAccount" className="btn btn-primary rounded-pill  wd-login-button-size mt-3">Sign Up</button>
                        </label>
                    </div>

                </div>





            </fieldset>
            </form>
        </div>
    )
}

export default Register;