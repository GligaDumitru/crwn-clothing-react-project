import React from 'react';
import MenuItem from './../menu-iem/menu-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from './../../redux/directory/directory.selectors';

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {sections &&
      sections.map(({ title, imageUrl, id, linkUrl, size }) => (
        <MenuItem
          key={id}
          linkUrl={linkUrl}
          imageUrl={imageUrl}
          title={title}
          size={size}
        />
      ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps, null)(Directory);
