import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../custom-button/custom-button.component';
import { selectCartHidden, selectCartItems } from './../../redux/cart/cart-selectors';
import { setToggleField } from './../../redux/cart/cart.actions';
import CartItem from './../cart-item/cart-item.component';

function Cart({ hidden, cartItems, dispatch }) {
  return (
    <div className={`${hidden && 'hide'} cart-dropdown`}>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cI) => <CartItem key={cI.id} item={cI} />)
        ) : (
          <span className='empty-message'>No product in cart</span>
        )}
      </div>
      <Link to='/checkout'>
        <CustomButton onClick={() => dispatch(setToggleField('hidden'))}>
          GO TO CHECKOUT
        </CustomButton>
      </Link>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(Cart));
