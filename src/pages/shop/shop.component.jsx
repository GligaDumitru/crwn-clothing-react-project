import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { fetchCollectionsStartAsync } from './../../redux/shop/shop.actions';
import { connect } from 'react-redux';
import CollectionsOverviewContainer from './../../components/collection-overview/collection-overview.container';
import CollectionPageContainer from './../collection/collection.container';

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default withRouter(connect(null, mapDispatchToProps)(ShopPage));
