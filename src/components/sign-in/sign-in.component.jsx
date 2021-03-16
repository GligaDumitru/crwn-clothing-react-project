import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { auth, signInWithGoogle } from './../../firebase/firebase.utils';
import CustomButton from './../custom-button/custom-button.component';
import FormInput from './../form-input/form-input.component';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 'admin@admin.com',
      password: 'password1',
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: '',
        password: '',
      });
      this.props.history.push('/');
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
          <div style={{ display: 'flex' }}>
            <CustomButton>SIGN IN</CustomButton>
            <CustomButton isGoogleSignIn={true} onClick={signInWithGoogle}>
              SIGN IN With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default withRouter(SignIn);
