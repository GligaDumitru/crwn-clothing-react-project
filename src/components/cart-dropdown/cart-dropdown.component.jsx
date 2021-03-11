import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';

function Cart({ cart }) {
  return (
    <div className={`${cart && cart.hidden && 'hide'} cart-dropdown`}>
      <div className='cart-items'>
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, null)(Cart);
