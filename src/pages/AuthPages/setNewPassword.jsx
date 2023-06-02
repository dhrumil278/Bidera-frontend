import React, { useState } from 'react';
import { authSetNewPass } from '../../APIs/authAPIs';

function SetNewPassword() {
  const initialValues = {
    password: '',
    confirmPassword: '',
  };

  const [userinfo, setUserinfo] = useState(initialValues);
  const { password, confirmPassword } = userinfo;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await authSetNewPass();
    console.log('response: ', response);
  };

  const handleChange = (e) => {
    setUserinfo({ ...userinfo, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <div id="login">
        <h2 className="login-title">set new password</h2>
        <form className="login-form">
          <span className="fa fa-lock"></span>
          <input
            autoFocus
            maxLength="25"
            placeholder="New Password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => handleChange(e)}
            required
          />
          <span className="fa fa-lock"></span>
          <input
            autoComplete="off"
            maxLength="8"
            placeholder="Confirm New Password"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => handleChange(e)}
            required
          />
          <input type="submit" value="Set" onClick={(e) => handleSubmit(e)} />
        </form>
      </div>
    </div>
  );
}

export default SetNewPassword;
