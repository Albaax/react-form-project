import React from 'react';
import './TabNavigation.css';

const TabNavigation = ({currentTab, activeTab, onClick}) => {

    return (
        <div onClick={onClick} className={`tabs ${currentTab} ${activeTab}`}>
            <span className={`${currentTab}`}>{currentTab}</span>
        </div>
        );
}

export default TabNavigation;