import React from "react";
import "../../Style/App.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="container">
      <div id="signup">
        <h2 className="login-title">create new one</h2>
        <form className="signup-form">
          <div className="grid-1">
            <div className="grid-items">
              <span className="fa fa-user"></span>
              <input
                autoFocus
                maxLength="25"
                placeholder="First name"
                type="text"
                required
              />
            </div>
            <div className="grid-items">
              <span className="fa fa-user"></span>
              <input
                autoFocus
                maxLength="25"
                placeholder="Last name"
                type="text"
                required
              />
            </div>
          </div>
          <div className="grid-1">
            <div className="grid-items">
              <span className="fa fa-user"></span>
              <input
                autoFocus
                maxLength="25"
                placeholder="Contact no."
                type="number"
                required
              />
            </div>
            <div className="grid-items">
              <span className="fa fa-user"></span>
              <input
                autoFocus
                maxLength="25"
                placeholder="Email"
                type="email"
                required
              />
            </div>
          </div>
          <div className="grid-2">
            <div className="grid-items">
              <span className="fa fa-lock"></span>
              <input
                autoComplete="off"
                maxLength="8"
                placeholder="Password"
                type="password"
                required
              />
            </div>
            <div className="grid-items">
              <span className="fa fa-lock"></span>
              <input
                autoComplete="off"
                maxLength="8"
                placeholder="Confirm Password"
                type="password"
                required
              />
            </div>
          </div>
          <input type="submit" value="Sign up" />
        </form>
        <div className="login__actions">
          <p>
            already a member? <Link to="/">Login</Link>
            <span className="fa fa-arrow-right"></span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
