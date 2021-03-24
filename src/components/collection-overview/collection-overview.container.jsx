import { compose } from 'redux';
import { connect } from 'react-redux';
import WithSpinner from './../with-spinner/with-spinner.component';
import CollectionsOverview from './collection-overview.component';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionLoading } from './../../redux/shop/shop-selectors';

const mapStateToProps = createStructuredSelector({
  isLoaded: selectIsCollectionLoading,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
