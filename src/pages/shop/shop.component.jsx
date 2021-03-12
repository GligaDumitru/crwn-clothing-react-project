import React from 'react';
import CollectionsOverview from './../../components/collection-overview/collection-overview.component';
import { Route, withRouter } from 'react-router-dom';
import CollectionPage from './../collection/collection.component';
const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collection`} component={CollectionPage} />
  </div>
);

export default withRouter(ShopPage);
