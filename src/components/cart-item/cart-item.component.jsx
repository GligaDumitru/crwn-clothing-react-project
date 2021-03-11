import React from 'react';

export default function CartItem({ item: { imageUrl, price, name, quatity } }) {
  return (
    <div className='cart-item'>
      <img src={imageUrl} alt='item' />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          ${quatity} x RON{price}
        </span>
      </div>
    </div>
  );
}