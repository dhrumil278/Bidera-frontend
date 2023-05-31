import React from "react";

function Verification() {
  return (
    <div className="container">
      <div id="verification">
        <h2 className="login-title">Verification Code</h2>
        <form className="login-form">
          <div className="verification-grid">
            <input
              autoFocus
              maxLength="1"
              placeholder="0"
              type="text"
              required
            />
            <input
              autoFocus
              maxLength="1"
              placeholder="0"
              type="text"
              required
            />
            <input
              autoFocus
              maxLength="1"
              placeholder="0"
              type="text"
              required
            />
            <input
              autoFocus
              maxLength="1"
              placeholder="0"
              type="text"
              required
            />
            <input
              autoFocus
              maxLength="1"
              placeholder="0"
              type="text"
              required
            />
            <input
              autoFocus
              maxLength="1"
              placeholder="0"
              type="text"
              required
            />
          </div>
          <input type="submit" value="Verify" />
        </form>
      </div>
    </div>
  );
}

export default Verification;
