import React, { useState } from "react";
import { authVerification } from "../../APIs/authAPIs";

function Verification() {
  const [verificationCode, setVerificationCode] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await authVerification(verificationCode);
  };
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
          <input
            type="submit"
            value="Verify"
            onClick={(e) => handleSubmit(e)}
          />
        </form>
      </div>
    </div>
  );
}

export default Verification;
