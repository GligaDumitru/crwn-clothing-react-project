import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollectionsForPreview } from './../../redux/shop/shop-selectors';
import PreviewCollection from './../preview-collection/preview-collection.component';

const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    {collections &&
      collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview,
});

export default connect(mapStateToProps, null)(CollectionsOverview);
