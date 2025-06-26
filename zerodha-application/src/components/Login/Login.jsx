import React from "react";
import './Login.css';
import '/public/kite.png';

function Login() {
  return (
    <div>
      <div className="flex-container">
        <div className="login-card">
          <img src="./kite.png" width="80px" height="80px" />
          <h2>Login to Kite</h2>
          <form>
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
              <button type="submit">Login</button>
            </div>
            <div id="fp">
              <a href="#">Forgot User ID or Password?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
