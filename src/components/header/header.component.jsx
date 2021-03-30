import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { signOutStart } from './../../redux/user/user.actions';
import { selectCurrentUser } from './../../redux/user/user.selectors';
import Cart from './../cart-dropdown/cart-dropdown.component';
import CartIcon from './../cart-icon/cart-icon.component';
import { HeaderContainer, LogoContainer, OptionLink, Options } from './header.styles';

const Header = ({ currentUser, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <Options>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/contact'>Contact</OptionLink>
        {currentUser ? (
          <>
            <div>{`Hi, ${
              currentUser.displayName || currentUser.email.split('@')[0]
            }`}</div>
            <OptionLink as='div' onClick={signOutStart}>
              Logout
            </OptionLink>
          </>
        ) : (
          <OptionLink to='/account'>Account</OptionLink>
        )}
        <CartIcon />
      </Options>
      <Cart />
    </HeaderContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
