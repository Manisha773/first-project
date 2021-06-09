import React from 'react';
import './SignUp.css';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success-heading1'>Registered !</h1>
      <h3 className='form-success-heading3'>You can login now </h3>
      <span className='form-input-logins'>
        <a href='/sign-in'>click here</a>
      </span>
      

      {/* <img className='form-img-2' src='img/img-4.svg' alt='success-image' /> */}
    </div>
  );
};

export default FormSuccess;