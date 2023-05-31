import React from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="container">
      <div id="login">
        <h2 className="login-title">Forgot Password</h2>
        <form className="login-form">
          <span className="fa fa-user"></span>
          <input
            autoFocus
            maxLength="25"
            placeholder="Email"
            type="email"
            required
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
