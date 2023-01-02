import React from 'react'
import Add from "../img/addAvatar.png"
function Login() {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Pisces Chat</span>
            <span className="title">Login</span>
            <form>
                <input type="email" placeholder="example@gmail.com" />
                <input type="password" placeholder="***************" />
                <input type="file" id="file"  style={{display: 'none'}}  />
                <button>Sign in</button>
            </form>
            <p>You do have an account ? <span>Register</span> </p>
        </div>
    </div>
  )
}

export default Login