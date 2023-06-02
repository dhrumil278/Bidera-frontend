import React, { useState } from 'react';
import { authVerification } from '../../APIs/authAPIs';
import OtpInput from 'react-otp-input';
import '../../Style/App.css';

function Verification() {
  const [verificationCode, setVerificationCode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(verificationCode);
    const response = await authVerification(verificationCode);
    console.log('response: ', response);
  };
  return (
    <div className="container">
      <div id="verification">
        <h2 className="login-title">Verification Code</h2>
        <form className="login-form">
          <div className="verification-grid">
            <OtpInput
              value={verificationCode}
              onChange={setVerificationCode}
              numInputs={6}
              renderSeparator={<span>&nbsp;</span>}
              renderInput={(props) => <input {...props} />}
              inputStyle={{
                width: '50px',
                fontSize: '15px',
                fontWeight: '600',
              }}
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
