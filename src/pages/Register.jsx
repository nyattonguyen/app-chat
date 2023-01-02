import React from 'react'
import Add from "../img/addAvatar.png"
function Register() {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Pisces Chat</span>
            <span className="title">Register</span>
            <form>
                <input type="text" placeholder="display name" />
                <input type="email" placeholder="email" />
                <input type="file" id="file"  style={{display: 'none'}}  />
                <label htmlFor="file">
                <img src={Add} alt="" />
                <span>Add an avater</span>
                </label>
                <button>Sign up</button>
            </form>
            <p>You do have an account ? <span>Login</span> </p>
        </div>
    </div>
  )
}

export default Register