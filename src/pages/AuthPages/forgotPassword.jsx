import React, { useState } from "react";
import { authForgotPass } from "../../APIs/authAPIs";
// import { Link } from "react-router-dom";

function ForgotPassword() {
  const initialValues = {
    email: "",
  };

  const [userinfo, setUserinfo] = useState(initialValues);
  const { email } = userinfo;
  const handleSubmit = async (e) => {
    console.log("submit called");
    e.preventDefault();
    const response = await authForgotPass(userinfo);
    console.log(response);
  };

  const handleChange = (e) => {
    setUserinfo({ ...userinfo, [e.target.name]: e.target.value });
    console.log(userinfo);
  };
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
            name="email"
            value={email}
            onChange={(e) => handleChange(e)}
            required
          />
          <input
            type="submit"
            value="Submit"
            onClick={(e) => handleSubmit(e)}
          />
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
