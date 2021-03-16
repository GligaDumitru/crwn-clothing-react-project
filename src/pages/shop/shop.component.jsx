import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import { firestore } from '../../firebase/firebase.utils';
import CollectionsOverview from './../../components/collection-overview/collection-overview.component';
import { convertCollectionsSnapshotToMap } from './../../firebase/firebase.utils';
import CollectionPage from './../collection/collection.component';
import { updateCollection } from './../../redux/shop/shop.actions';
import { connect } from 'react-redux';
import WithSpinner from './../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollection } = this.props;
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsObject = convertCollectionsSnapshotToMap(snapshot);
      updateCollection(collectionsObject);
      this.setState({
        loading: false,
      });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collection`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollection: (payload) => dispatch(updateCollection(payload)),
});

export default withRouter(connect(null, mapDispatchToProps)(ShopPage));
