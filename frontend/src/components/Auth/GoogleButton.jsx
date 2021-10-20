import googleLogo from 'asset/svg/google.svg';
import React from 'react';

const GoogleButton = ({ text, handleLogin }) => (
  <button onClick={handleLogin} type="button" className="google__btn">
    <div className="google__logo">
      <img src={googleLogo} alt="google" />
    </div>
    <div className="btn__txt-wrap">
      <div className="btn__txt">{text}</div>
    </div>
  </button>
);

export default GoogleButton;
