import React from 'react';
import CustomButton from './../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addCartItem } from '../../redux/cart/cart.actions';

function CollectionItem({ item, addCartItem }) {
  const { name, price, imageUrl } = item;
  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{`$${price} `}</span>
      </div>
      <CustomButton inverted onClick={() => addCartItem(item)}>
        Add To Cart
      </CustomButton>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addCartItem: (payload) => dispatch(addCartItem(payload)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
