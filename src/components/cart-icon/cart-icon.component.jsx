import React from 'react';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { setToggleField } from './../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart-selectors';

function CartIcon({ setToggleField, itemCount }) {
  return (
    <div className='cart-icon' onClick={() => setToggleField('hidden')}>
      <ShoppingBag className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );
}

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  setToggleField: (payload) => dispatch(setToggleField(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
