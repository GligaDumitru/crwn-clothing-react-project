import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { selectCurrentUser } from './../../redux/user/user.selectors';
import Cart from './../cart-dropdown/cart-dropdown.component';
import CartIcon from './../cart-icon/cart-icon.component';
import { HeaderContainer, LogoContainer, OptionLink, Options } from './header.styles';

const Header = ({ currentUser }) => {
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
            <div>{`Hi, ${currentUser.displayName}`}</div>
            <OptionLink as='div' onClick={() => auth.signOut()}>
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, null)(Header);
