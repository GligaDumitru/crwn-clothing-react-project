import React, { Component } from 'react';
import { connect } from 'react-redux';

import { googleSignInStart } from '../../redux/user/user.actions';
import { emailSignInStart } from './../../redux/user/user.actions';
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
    const { emailSignInStart } = this.props;
    emailSignInStart({ email, password });
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };
  render() {
    const { email, password } = this.state;
    const { googleSignInStart } = this.props;
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (payload) => dispatch(emailSignInStart(payload)),
});

export default connect(null, mapDispatchToProps)(SignIn);
