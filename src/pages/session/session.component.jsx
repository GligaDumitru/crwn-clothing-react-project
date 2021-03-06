import React from 'react';
import SignIn from './../../components/sign-in/sign-in.component';
import SignUp from './../../components/sign-up/sign-up.component';

export default function Session() {
  return (
    <div className='session'>
      <h1>Login/Signup</h1>
      <div className='sign-options'>
        <SignIn />
        <SignUp />
      </div>
    </div>
  );
}
