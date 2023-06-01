import React, { useState } from 'react';
import '../../Style/App.css';
import { Link } from 'react-router-dom';
import { authSignup } from '../../APIs/authAPIs';

function Signup() {
  const initialValues = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const [userinfo, setUserinfo] = useState(initialValues);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await authSignup(userinfo);
    console.log('response: ', response);
  };

  const handleChange = (e) => {
    setUserinfo({ ...userinfo, [e.target.name]: e.target.value });
  };
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
                name="firstName"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div className="grid-items">
              <span className="fa fa-user"></span>
              <input
                autoFocus
                maxLength="25"
                placeholder="Last name"
                name="lastName"
                type="text"
                onChange={(e) => handleChange(e)}
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
                name="phone"
                type="number"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div className="grid-items">
              <span className="fa fa-user"></span>
              <input
                autoFocus
                maxLength="25"
                placeholder="Email"
                name="email"
                type="email"
                onChange={(e) => handleChange(e)}
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
                name="password"
                type="password"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div className="grid-items">
              <span className="fa fa-lock"></span>
              <input
                autoComplete="off"
                maxLength="8"
                placeholder="Confirm Password"
                name="confirmPassword"
                type="password"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
          </div>
          <input
            type="submit"
            value="Sign up"
            onClick={(e) => handleSubmit(e)}
          />
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
