import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import CartItem from './../cart-item/cart-item.component';

function Cart({ cart }) {
  return (
    <div className={`${cart.hidden && 'hide'} cart-dropdown`}>
      <div className='cart-items'>
        {cart.cartItems.map((cI) => (
          <CartItem key={cI.id} item={cI} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, null)(Cart);
