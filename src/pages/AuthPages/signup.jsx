import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { authSignup } from '../../APIs/authAPIs';
import '../../Style/App.css';

function Signup() {
  const initialValues = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // const [userinfo, setUserinfo] = useState(initialValues);

  const submitData = async (data) => {
    console.log('data: ', data);
    const response = await authSignup(data);
    console.log('response: ', response);
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  // };

  // const handleChange = (e) => {
  //   setUserinfo({ ...userinfo, [e.target.name]: e.target.value });
  // };
  return (
    <div className="container">
      <div id="signup">
        <h2 className="login-title">create new one</h2>
        <form className="signup-form" onSubmit={handleSubmit(submitData)}>
          <div className="grid-1">
            <div>
              <div className="grid-items">
                <span className="fa fa-user"></span>
                <input
                  {...register('firstName', { required: true, maxLength: 25 })}
                  // autoFocus
                  // maxLength="25"
                  placeholder="First name"
                  type="text"
                  // name="firstName"
                  // onChange={(e) => handleChange(e)}
                  // required
                />
              </div>
              {errors?.firstName?.type === 'required' && (
                <p> This field is required</p>
              )}
              {errors?.firstName?.type === 'maxLength' && (
                <p>It should not be larger than 25 Char.</p>
              )}
            </div>
            <div>
              <div className="grid-items">
                <span className="fa fa-user"></span>
                <input
                  // autoFocus
                  // maxLength="25"
                  placeholder="Last name"
                  {...register('lasstName', { required: true, maxLength: 25 })}
                  // name="lastName"
                  type="text"
                  // onChange={(e) => handleChange(e)}
                  // required
                />
              </div>
              {errors?.lastName?.type === 'required' && (
                <p> This field is required</p>
              )}
              {errors?.lastName?.type === 'maxLength' && (
                <p>It should not be larger than 25 Char.</p>
              )}
            </div>
          </div>
          <div className="grid-1">
            <div>
              <div className="grid-items">
                <span className="fa fa-user"></span>
                <input
                  // autoFocus
                  // maxLength="25"
                  placeholder="Contact no."
                  {...register('phone', {
                    required: true,
                    maxLength: 10,
                    minLength: 10,
                  })}
                  // name="phone"
                  type="number"
                  // onChange={(e) => handleChange(e)}
                  // required
                />
              </div>
              {errors?.phone?.type === 'required' && (
                <p> This field is required</p>
              )}
              {errors?.phone?.type === 'maxLength' && (
                <p>It should 10 Char long.</p>
              )}
              {errors?.phone?.type === 'minLength' && (
                <p>It should 10 Char long.</p>
              )}
            </div>
            <div>
              <div className="grid-items">
                <span className="fa fa-user"></span>
                <input
                  // autoFocus
                  // maxLength="25"
                  {...register('email', {
                    required: true,
                    maxLength: 25,
                    minLength: 5,
                  })}
                  placeholder="Email"
                  // name="email"
                  type="email"
                  // onChange={(e) => handleChange(e)}
                  // required
                />
              </div>
              {errors?.email?.type === 'required' && (
                <p> This field is required</p>
              )}
              {errors?.email?.type === 'maxLength' && (
                <p>It should not be larger than 25 Char.</p>
              )}
              {errors?.email?.type === 'minLength' && (
                <p>It should at least 5 Char long.</p>
              )}
            </div>
          </div>
          <div className="grid-2">
            <div>
              <div className="grid-items">
                <span className="fa fa-lock"></span>
                <input
                  // autoComplete="off"
                  // maxLength="8"
                  placeholder="Password"
                  // name="password"
                  {...register('password', {
                    required: true,
                    maxLength: 35,
                    minLength: 8,
                    pattern:
                      /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d)(?=.*[a-z]).{8,}$/,
                  })}
                  type="password"
                  // onChange={(e) => handleChange(e)}
                  // required
                />
              </div>
              {errors?.password?.type === 'required' && (
                <p> This field is required</p>
              )}
              {errors?.password?.type === 'maxLength' && (
                <p>It should not be larger than 25 Char.</p>
              )}
              {errors?.password?.type === 'minLength' && (
                <p>It should at least 5 Char long.</p>
              )}
            </div>
            <div>
              <div className="grid-items">
                <span className="fa fa-lock"></span>
                <input
                  // autoComplete="off"
                  // maxLength="8"
                  placeholder="Confirm Password"
                  {...register('confirmPassword', {
                    required: true,
                    maxLength: 35,
                    minLength: 8,
                    pattern:
                      /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d)(?=.*[a-z]).{8,}$/,
                    validate: (value) => {
                      if (watch('password') !== value) {
                        return <p>Both password is not same</p>;
                      }
                    },
                  })}
                  // name="confirmPassword"
                  type="password"
                  // onChange={(e) => handleChange(e)}
                  // required
                />
              </div>
              {errors?.confirmPassword?.type === 'required' && (
                <p> This field is required</p>
              )}
              {errors?.confirmPassword?.type === 'maxLength' && (
                <p>It should not be larger than 25 Char.</p>
              )}
              {errors?.confirmPassword?.type === 'minLength' && (
                <p>It should at least 5 Char long.</p>
              )}
            </div>
          </div>
          <input
            type="submit"
            value="Sign up"
            // onClick={(e) => handleSubmit(e)}
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
