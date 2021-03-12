import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop-selectors';
import { withRouter } from 'react-router-dom';
import CollectionItem from './../../components/collection-item/collection-item.component';

const CollectionPage = ({ collection: { title, items } }) => {
  return (
    <div className='collection-page'>
      <h2>{title}</h2>
      <div className='items'>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collection)(state),
});

export default withRouter(connect(mapStateToProps, null)(CollectionPage));
