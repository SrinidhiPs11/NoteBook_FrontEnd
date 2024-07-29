import React, { useState, useContext } from 'react'
import {useNavigate } from "react-router-dom";
import { AlertContext } from '../context/CreateContext';
import Navbar from './Navbar';

const Login = () => {
    const host = "https://notebook-backend-bbj6.onrender.com"
    const context = useContext(AlertContext);
    const { showAlert } = context;
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch(`${host}/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({ email: credentials.email, password: credentials.password })
            });
            const json = await response.json();

            if (json.login) {
                localStorage.setItem('token', json.token);
                navigate("/", { replace: true });
                showAlert("Signed up Successfully", "success")
            } else {
                showAlert(json.error, "danger")
            }
        } catch (error) {
            showAlert("An error occurred", "danger");
        } finally {
            setIsLoading(false);
        }
    }

    
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const onClickSignup = (e) => {
        navigate("/signup", { replace: true });
    }
    return (
        <>
            <Navbar />
            <div className='flex flex-col sm:flex-row justify-center items-center h-auto mt-24 mb-10' >
                <div className='flex justify-center items-start flex-col mx-5 max-sm:mb-5' >
                    <h1 className='text-3xl text-blue-600 font-bold '>NoteBook</h1>
                    <p className='text-xl font-bold'>A place to keep track of your notes.</p>
                </div>
                <div className='flex mt-4 justify-center items-center' >
                    <div className='w-auto sm:w-[700px] mx-3' >
                        <form onSubmit={handleSubmit}>
                            <div className="mb-2">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" value={credentials.email} onChange={onChange} name="email" id="email" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                            </div>
                            <button type="submit" className="btn btn-primary" disabled={credentials.email.length < 1 || credentials.password.length < 1 || isLoading}>
                                {isLoading ? (
                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                ) : (
                                    'Login'
                                )}
                            </button>
                            <p className="my-3">Don't have an account?<button type='button' className="btn btn-outline-primary mx-1" onClick={onClickSignup}>Sign up</button> today for free!!</p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login