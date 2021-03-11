import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import CartItem from './../cart-item/cart-item.component';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartHidden,
} from './../../redux/cart/cart-selectors';

function Cart({ hidden, cartItems }) {
  return (
    <div className={`${hidden && 'hide'} cart-dropdown`}>
      <div className='cart-items'>
        {cartItems.map((cI) => (
          <CartItem key={cI.id} item={cI} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
  cartItems: selectCartItems,
});

export default connect(mapStateToProps, null)(Cart);
