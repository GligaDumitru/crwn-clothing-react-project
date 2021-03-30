import React, { useState } from 'react';
import { connect } from 'react-redux';

import { googleSignInStart } from '../../redux/user/user.actions';
import { emailSignInStart } from './../../redux/user/user.actions';
import CustomButton from './../custom-button/custom-button.component';
import FormInput from './../form-input/form-input.component';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailSignInStart({ email, password });
  };

  const handleChange = ({ target }) => {
    setUserCredentials({
      ...userCredentials,
      [target.name]: target.value,
    });
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type='text'
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
        <div style={{ display: 'flex' }}>
          <CustomButton type='submit'>SIGN IN</CustomButton>
          <CustomButton
            type='button'
            isGoogleSignIn
            onClick={googleSignInStart}
          >
            Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (payload) => dispatch(emailSignInStart(payload)),
});

export default connect(null, mapDispatchToProps)(SignIn);
