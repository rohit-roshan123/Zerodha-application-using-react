import React from "react";
import './Login.css';
import '/public/kite.png';

function Login() {
  return (
    <div>
      <div className="login-container">
        <div className="login-card">
          <img src="./kite.png" className='logo'/>
          <h2>Login to Kite</h2>
            <div className="in">
              <input
                type="text"
                id="userid"
                name="userid"
                placeholder="Phone or User ID"
                required
              />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="butt">
              <button type="submit" className='login-button'>Login</button>
            </div>
            <div id="fp">
              <a href="#">Forgot User ID or Password?</a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
