import React from 'react';
import { connect } from 'react-redux';
import {
  clearItemFromCart,
  decreaseCartItemQuantity,
  addCartItem,
} from './../../redux/cart/cart.actions';

function CheckoutItem({
  cartItem,
  clearItemFromCart,
  addCartItem,
  decreaseCartItemQuantity,
}) {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'> {name} </span>
      <span className='quantity'>
        <div
          className='arrow'
          onClick={() => decreaseCartItemQuantity(cartItem)}
        >
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addCartItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'> RON{price} </span>
      <div
        className='remove-button'
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
  decreaseCartItemQuantity: (item) => dispatch(decreaseCartItemQuantity(item)),
  addCartItem: (item) => dispatch(addCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
