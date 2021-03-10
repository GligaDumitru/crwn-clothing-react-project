import React, { Component } from 'react';
import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';
import { auth } from '../../firebase/firebase.utils';
import { createUserProfileDocument } from './../../firebase/firebase.utils';
export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.log(error);
      if (error.message) {
        alert(error.message);
      }
    }
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-in'>
        <h2>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            onChange={this.handleChange}
            name='displayName'
            value={displayName}
            required
            label='Name'
          />
          <FormInput
            type='email'
            onChange={this.handleChange}
            name='email'
            value={email}
            required
            label='Email'
          />
          <FormInput
            type='password'
            onChange={this.handleChange}
            name='password'
            value={password}
            required
            label='Password'
          />
          <FormInput
            type='password'
            onChange={this.handleChange}
            name='confirmPassword'
            value={confirmPassword}
            required
            label='Confirm Password'
          />
          <CustomButton>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}
