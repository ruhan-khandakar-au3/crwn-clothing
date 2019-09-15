import React, { Component } from "react";

import "./shop.scss";

import SHOP_DATA from "./shop-data";
import PreviewCollection from "../../components/previewCollection/PreviewCollection";

class Shop extends Component {
  state = {
    collections: SHOP_DATA
  };
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

export default Shop;
