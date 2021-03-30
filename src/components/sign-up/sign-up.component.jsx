import React, { useState } from 'react';
import { connect } from 'react-redux';

import { signUpStart } from '../../redux/user/user.actions';
import CustomButton from './../custom-button/custom-button.component';
import FormInput from './../form-input/form-input.component';

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    signUpStart({ email, password, displayName });
  };

  const handleChange = ({ target }) => {
    setUserCredentials({
      ...userCredentials,
      [target.name]: target.value,
    });
  };

  return (
    <div className='sign-in'>
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type='text'
          onChange={handleChange}
          name='displayName'
          value={displayName}
          required
          label='Name'
        />
        <FormInput
          type='email'
          onChange={handleChange}
          name='email'
          value={email}
          required
          label='Email'
        />
        <FormInput
          type='password'
          onChange={handleChange}
          name='password'
          value={password}
          required
          label='Password'
        />
        <FormInput
          type='password'
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
          required
          label='Confirm Password'
        />
        <CustomButton>SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (payload) => dispatch(signUpStart(payload)),
});

export default connect(null, mapDispatchToProps)(SignUp);
