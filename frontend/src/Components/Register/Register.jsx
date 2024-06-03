import React, {useState} from 'react'
import '../../App.css'
import {Link} from 'react-router-dom'
import Axios from 'axios'
import video from '../../LoginAssets/flow.mp4'
import logo from '../../LoginAssets/logo1.png'
import { FaUserShield } from "react-icons/fa"
import { BsFillShieldLockFill } from "react-icons/bs"
import { AiOutlineSwapRight } from "react-icons/ai"
import { MdEmail } from "react-icons/md"


const Register = () => {
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const createUser = ()=>{
        Axios.post('http://localhost:3002/register', {
            Email: email,
            UserName: userName,
            Password: password
        }).then(()=>{
            console.log('User has been Created !');
        });
    };
   const handleSubmit = (event)=>{
        event.preventDefault();
        createUser();
        event.target.reset();
    }
  return (
    <div className="registerPage flex">
    <div className="container flex">
        <div className="videoDiv">
            <video src={video} autoPlay muted loop></video>
            <div className="textDiv">
                <h2 className="title">Create And Sell Extraordinary Products</h2>
                <p>Adopt the peace of nature!</p>
            </div>
            <div className="footerDiv flex">
                    <span className="text">Have an account?</span>
                    <Link to={'/'}>
                        <button className="btn">Login</button>
                    </Link>
                </div>
        </div>
        <div className="formDiv flex">
            <div className="headerDiv">
                <img src={logo} alt="Logo Image"/>
                <h3>Let Us Know You!</h3>
            </div>
            <form action="" className='form grid' onSubmit={handleSubmit} method='POST'>
                <span>Register Will go here</span>
                <div className="inputDiv">
                    <label htmlFor="email">Email</label>
                    <div className="input flex">
                        <MdEmail className="icon"/>
                        <input type="email" id='email' placeholder='Enter Email' onChange={(e)=>{setEmail(e.target.value)}} />
                    </div>
                </div>
                <div className="inputDiv">
                    <label htmlFor="username">Username</label>
                    <div className="input flex">
                        <FaUserShield className="icon"/>
                        <input type="text" id='username' placeholder='Enter Username' onChange={(e)=>{setUserName(e.target.value)}}/>
                    </div>
                </div>
                <div className="inputDiv">
                    <label htmlFor="password">Password</label>
                    <div className="input flex">
                        <BsFillShieldLockFill className="icon"/>
                        <input type="password" id='password' placeholder='Enter Password' onChange={(e)=>{
                            setPassword(e.target.value)
                        }}/>
                    </div>
                </div>
                <button type='submit' className='btn flex'>
                    <span>Register</span>
                    <AiOutlineSwapRight className="icon"/>
                </button>
                <span className="forgorPassword">
                    Forgot your Password? <a href="">Click Here</a>
                </span>
            </form>
        </div>
    </div>
</div>
  )
}

export default Register