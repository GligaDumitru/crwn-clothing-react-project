import React, { Component } from 'react';
import { SHOP_DATA } from './../../Services/MockData';
import PreviewCollection from './../../components/preview-collection/preview-collection.component';
export default class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollection key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
