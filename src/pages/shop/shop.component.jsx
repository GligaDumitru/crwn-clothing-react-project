import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import { firestore } from '../../firebase/firebase.utils';
import CollectionsOverview from './../../components/collection-overview/collection-overview.component';
import { convertCollectionsSnapshotToMap } from './../../firebase/firebase.utils';
import CollectionPage from './../collection/collection.component';
import { updateCollection } from './../../redux/shop/shop.actions';
import { connect } from 'react-redux';

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsObject = convertCollectionsSnapshotToMap(snapshot);
      this.props.updateCollection(collectionsObject);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collection`} component={CollectionPage} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollection: (payload) => dispatch(updateCollection(payload)),
});

export default withRouter(connect(null, mapDispatchToProps)(ShopPage));
