import React from "react";

function SetNewPassword() {
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
            required
          />
          <span className="fa fa-lock"></span>
          <input
            autoComplete="off"
            maxLength="8"
            placeholder="Confirm New Password"
            type="password"
            required
          />
          <input type="submit" value="Set" />
        </form>
      </div>
    </div>
  );
}

export default SetNewPassword;
