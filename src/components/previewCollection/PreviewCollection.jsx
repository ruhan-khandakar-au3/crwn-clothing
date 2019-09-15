import React from "react";

import "./previewCollection.scss";

import CollectionItem from "../collectionItem/CollectionItem";

const PreviewCollection = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items.splice(0, 4).map(({ id, ...itemProps }) => (
        <CollectionItem key={id} {...itemProps} />
      ))}
    </div>
  </div>
);

export default PreviewCollection;
