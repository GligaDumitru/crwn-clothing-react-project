import React from 'react'
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss'

const MenuItem = ({ imageUrl, size = 'normal', linkUrl, title = 'title', subtitle = 'SHOP NOW', history }) => (
    <div className={`${size} menu-item`} onClick={() => history.push(linkUrl)}>
        <div
            className="backgroundImageScale"
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">{subtitle}</span>
            </div>
        </div>
    </div>
)
export default withRouter(MenuItem);

