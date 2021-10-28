import React from 'react';
import './PageTitle.css';

const PageTitle = ({title}) => {

    return (
        <header>
            <div className="header-text">
                <h3 className="header-text-1">Forms</h3>
                <h2 className="header-text-2">{title}</h2>
            </div>
        </header>
    );
}

export default PageTitle;