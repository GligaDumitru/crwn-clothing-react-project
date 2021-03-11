import React from 'react';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { setToggleField } from './../../redux/cart/cart.actions';

function CartIcon(props) {
  const { cartItems = [] } = props.cart;
  return (
    <div className='cart-icon' onClick={() => setToggleField('hidden')}>
      <ShoppingBag className='shopping-icon' />
      <span className='item-count'>{cartItems.length}</span>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  setToggleField: (payload) => dispatch(setToggleField(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
