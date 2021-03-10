import React, { Component } from 'react';
import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 'admin@admin.com',
      password: 'password1',
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      email: '',
      password: '',
    });
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
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
          <CustomButton>SIGN IN</CustomButton>
        </form>
      </div>
    );
  }
}
