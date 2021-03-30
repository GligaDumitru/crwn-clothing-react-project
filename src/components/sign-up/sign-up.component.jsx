import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signUpStart } from '../../redux/user/user.actions';
import CustomButton from './../custom-button/custom-button.component';
import FormInput from './../form-input/form-input.component';

class SignUp extends Component {
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
    const { signUpStart } = this.props;

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    signUpStart({ email, password, displayName });
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

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (payload) => dispatch(signUpStart(payload)),
});

export default connect(null, mapDispatchToProps)(SignUp);
