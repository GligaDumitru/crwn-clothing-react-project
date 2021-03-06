import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import CollectionsOverviewContainer from './../../components/collection-overview/collection-overview.container';
import { fetchCollectionsStart } from './../../redux/shop/shop.actions';
import CollectionPageContainer from './../collection/collection.container';

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collection`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default withRouter(connect(null, mapDispatchToProps)(ShopPage));
