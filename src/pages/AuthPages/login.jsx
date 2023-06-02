import React, { useState } from 'react';
import '../../Style/App.css';
import { Link } from 'react-router-dom';
import { authLogin } from '../../APIs/authAPIs';
import { useForm } from 'react-hook-form';

function Login() {
  // const initialValues = {
  //   email: '',
  //   password: '',
  // };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // const [userinfo, setUserInfo] = useState(initialValues);
  // const { email, password } = userinfo;

  const submitData = async (data) => {
    console.log('data: ', data);
    // e.preventDefault();
    const response = await authLogin(data);
    console.log('response: ', response);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const response = await authLogin(userinfo);
  //   console.log('response: ', response);
  // };
  // const handleChange = (e) => {
  //   setUserInfo({ ...userinfo, [e.target.name]: e.target.value });
  //   console.log('userinfo: ', userinfo);
  // };
  return (
    <div className="container">
      <div id="login">
        <h2 className="login-title">Login</h2>
        <form className="login-form" onSubmit={handleSubmit(submitData)}>
          <span className="fa fa-user"></span>
          <input
            {...register('email', {
              required: true,
              maxLength: 25,
              minLength: 5,
            })}
            type="email"
            placeholder="Email"
          />
          {errors?.email?.type === 'required' && (
            <p id="errorUseForm">This field is required</p>
          )}
          {errors?.email?.type === 'maxLength' && (
            <p id="errorUseForm">it should not be larger than 25 char.</p>
          )}
          {errors?.email?.type === 'minLength' && (
            <p id="errorUseForm">it should have min 5 char.</p>
          )}
          <span className="fa fa-lock"></span>
          <input
            type="password"
            placeholder="password"
            {...register('password', {
              required: true,
              maxLength: 35,
              minLength: 8,
              pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d)(?=.*[a-z]).{8,}$/,
            })}
          />
          {errors?.password?.type === 'required' && (
            <p id="errorUseForm">This field is required</p>
          )}
          {errors?.password?.type === 'maxLength' && (
            <p id="errorUseForm">it should not be larger than 35 char.</p>
          )}
          {errors?.password?.type === 'minLength' && (
            <p id="errorUseForm">it should have min 5 char.</p>
          )}
          {errors?.password?.type === 'pattern' && (
            <p id="errorUseForm">make sure you enter strong password</p>
          )}
          <input
            type="submit"
            value="Log in"
            // onClick={(e) => handleSubmit(e)}
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
