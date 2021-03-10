import React, { Component } from 'react'
import MenuItem from './../menu-iem/menu-item.component';
import './directory.styles.scss'
import { sections } from './directory.data';
export default class Directory extends Component {

    render() {
        return (
            <div className="directory-menu">
                {
                    sections.map(({ title, imageUrl, id, linkUrl, size }) =>
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
