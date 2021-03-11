import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from './../cart-icon/cart-icon.component';
import Cart from './../cart-dropdown/cart-dropdown.component';
import { setToggleField } from './../../redux/cart/cart.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './../../redux/user/user.selectors';
import { selectCartHidden } from './../../redux/cart/cart-selectors';
const Header = ({ currentUser, setToggleField }) => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          Contact
        </Link>
        {currentUser ? (
          <>
            <div>{`Hi, ${currentUser.displayName}`}</div>
            <div className='option logout-btn' onClick={() => auth.signOut()}>
              Logout
            </div>
          </>
        ) : (
          <Link className='option' to='/account'>
            Account
          </Link>
        )}

        <CartIcon />
      </div>
      <Cart />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  setToggleField: (payload) => dispatch(setToggleField(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
