import React from "react";
import "../../Style/App.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container">
      <div id="login">
        <h2 className="login-title">Login</h2>
        <form className="login-form">
          <span className="fa fa-user"></span>
          <input
            autoFocus
            maxLength="25"
            placeholder="Email"
            type="email"
            required
          />
          <span className="fa fa-lock"></span>
          <input
            autoComplete="off"
            maxLength="8"
            placeholder="Password"
            type="password"
            required
          />
          <input type="submit" value="Log in" />
        </form>
        <div className="sign-up__actions">
          <p>
            Not a member? <Link to="/signup">Sign up now</Link>
            <span className="fa fa-arrow-right"></span>
          </p>
          <p>
            <Link to="/forgotPassword">forgot password ?</Link>
          </p>
          <div className="login-options">
            <ul>
              <li>
                <Link>
                  <i class="fa-brands fa-google"></i>
                </Link>
              </li>
              <li>
                <Link>
                  <i class="fa-brands fa-facebook-f"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
