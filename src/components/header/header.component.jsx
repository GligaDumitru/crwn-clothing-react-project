import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from './../cart-icon/cart-icon.component';
import Cart from './../cart-dropdown/cart-dropdown.component';
import { setToggleField } from './../../redux/cart/cart.actions';

const Header = ({ cart, currentUser, setToggleField }) => {
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

        <CartIcon onClick={() => setToggleField('hidden')} />
      </div>
      <Cart />
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setToggleField: (payload) => dispatch(setToggleField(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
