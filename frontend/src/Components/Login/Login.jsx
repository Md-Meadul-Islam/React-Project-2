import React, {useState} from 'react';
import '../../App.css';
import Axios from 'axios'
import {Link, useNavigate} from 'react-router-dom';
import video from '../../LoginAssets/flow.mp4';
import logo from '../../LoginAssets/logo1.png';
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

const Login = () => {
    const [email, loginEmail] = useState('')
    const [password, loginPassword] = useState('')
    const navigateTo = useNavigate()
    const loginUser = ()=>{
        Axios.post('http://localhost:3002/', {
            LoginEmail: email,
            LoginPassword: password
        }).then((response)=>{
            if(response.data.message){
                navigateTo('/')
            }else{
                navigateTo('/dashboard')
            }
        });
    };
   const handleSubmit = (event)=>{
        event.preventDefault();
        loginUser();
        loginEmail('')
        loginPassword('')
    }
  return (
    <div>
        <div className="loginPage flex">
            <div className="container flex">
                <div className="videoDiv">
                    <video src={video} autoPlay muted loop></video>
                    <div className="textDiv">
                        <h2 className="title">Create And Sell Extraordinary Products</h2>
                        <p>Adopt the peace of nature!</p>
                    </div>
                    <div className="footerDiv flex">
                            <p className="text">Don't have an account?</p>
                            <Link to={'/register'}>
                                <button className="btn">Sign Up</button>
                            </Link>
                        </div>
                </div>
                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="Logo Image"/>
                        <h3>Welcome Back!</h3>
                    </div>
                    <form action="" className='form grid' onSubmit={handleSubmit}>
                        <div className="inputDiv">
                            <label htmlFor="email">Email</label>
                            <div className="input flex">
                                <FaUserShield className="icon"/>
                                <input type="email" id='email' placeholder='Enter Email' onChange={(e)=>{
                                    loginEmail(e.target.value)
                                }}/>
                            </div>
                        </div>
                        <div className="inputDiv">
                            <label htmlFor="password">Password</label>
                            <div className="input flex">
                                <BsFillShieldLockFill className="icon"/>
                                <input type="password" id='password' value={password} placeholder='Enter Password' onChange={(e)=>{
                                    loginPassword(e.target.value)
                                }}/>
                            </div>
                        </div>
                        <button type='submit' className='btn flex'>
                            <span>Login</span>
                            <AiOutlineSwapRight className="icon"/>
                        </button>
                        <span className="forgotPassword">
                            Forgot your Password? <a href="">Click Here</a>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login