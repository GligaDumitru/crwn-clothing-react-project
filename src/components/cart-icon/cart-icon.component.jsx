import React from 'react';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';

export default function CartIcon({ onClick }) {
  return (
    <div className='cart-icon' onClick={onClick}>
      <ShoppingBag className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
}
