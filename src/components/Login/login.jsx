import React from 'react';
import './login.css';
import { IoLogoGoogle } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa"

const LoginPage = () => {
    return (
        <>
           

            <div className="container" id="container">
                <div className="form-container sign-in">
                    <form>
                        <h1>Log In</h1>
                        
                        <div className="social-icons">
                            <a href="#" className="icon">
                            <IoLogoGoogle />
                            </a>
                            <a href="#" className="icon">
                            <FaGithub />
                            </a>
                            <a href="#" className="icon">
                            <FaLinkedin />
                            </a>
                        </div>
                       
                        <span>or use your email password</span>
                        <div className="input-password">
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="input-password">
                            <input
                                type="password"
                                id="signin-password"
                                placeholder="Password"
                            />
                            <button type="button" id="toggle-signin-password">
                            <FaRegEye />
                            </button>
                        </div>

                        <a href="#">Forget Your Password?</a>
                        <button>Log In</button>
                    </form>
                </div>

                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1 style={{ color: 'white', padding: '20px' }}>Welcome Back!</h1>
                            <button className="hidden" id="login">
                                Log In
                            </button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <img src="src\assets\logo2.png" alt="logo"/>  
                        </div>
                    </div>
                </div>
            </div>

           
        </>
    );
};



export default LoginPage;