import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartItemsTotalPrice } from '../../redux/cart/cart-selectors';
import CheckoutItem from './../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from './../../components/stripe-button/stripe-button.component';

function CheckoutPage({ cartItems, totalPrice }) {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>

        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>
        <span>TOTAL: RON {totalPrice}</span>
      </div>
      <StripeCheckoutButton price={totalPrice} />

      <div className='test-warning' style={{ color: 'red' }}>
        *Please use the following test credit card for <payments></payments>
        4242 4242 4242 4242 03/22 123
      </div>
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartItemsTotalPrice,
});

export default connect(mapStateToProps, null)(CheckoutPage);
