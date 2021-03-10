import React, { Component } from 'react'
import MenuItem from './../menu-iem/menu-item.component';
import { SECTIONS_DATA } from './../../Services/MockData';

export default class Directory extends Component {

    render() {
        return (
            <div className="directory-menu">
                {
                    SECTIONS_DATA.map(({ title, imageUrl, id, linkUrl, size }) =>
                        <MenuItem
                            key={id}
                            linkUrl={linkUrl}
                            imageUrl={imageUrl}
                            title={title}
                            size={size}
                        />
                    )
                }
            </div>
        )
    }
}
