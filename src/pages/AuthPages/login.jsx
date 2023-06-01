import React, { useState } from 'react';
import '../../Style/App.css';
import { Link } from 'react-router-dom';
import { authLogin } from '../../APIs/authAPIs';

function Login() {
  const initialValues = {
    email: '',
    password: '',
  };

  const [userinfo, setUserInfo] = useState(initialValues);
  const { email, password } = userinfo;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await authLogin(userinfo);
    console.log('response: ', response);
  };
  const handleChange = (e) => {
    setUserInfo({ ...userinfo, [e.target.name]: e.target.value });
    console.log('userinfo: ', userinfo);
  };
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
            value={email}
            required
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <span className="fa fa-lock"></span>
          <input
            autoComplete="off"
            maxLength="8"
            placeholder="Password"
            type="password"
            value={password}
            name="password"
            onChange={(e) => handleChange(e)}
            required
          />
          <input
            type="submit"
            value="Log in"
            onClick={(e) => handleSubmit(e)}
          />
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
                  <i className="fa-brands fa-google"></i>
                </Link>
              </li>
              <li>
                <Link>
                  <i className="fa-brands fa-facebook-f"></i>
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
