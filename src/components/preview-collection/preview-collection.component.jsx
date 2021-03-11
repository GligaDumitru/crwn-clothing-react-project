import React from 'react';
import CollectionItem from './../collection-item/collection-item.component';

export default function PreviewCollection({ title = 'Title', items = [] }) {
  return (
    <div className='preview-collection'>
      <h1 className='title'>{title}</h1>
      <div className='preview'>
        {items
          .filter((item, index) => index < 4)
          .map((item, index) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}
