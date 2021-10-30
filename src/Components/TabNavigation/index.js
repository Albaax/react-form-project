import React from 'react';
import './TabNavigation.css';

const TabNavigation = ({currentTab, activeTab}) => {

    return (
        <div className={`tabs ${currentTab} ${activeTab}`}>
            <span class={`${currentTab}`}>{currentTab}</span>
        </div>
        );
}

export default TabNavigation;