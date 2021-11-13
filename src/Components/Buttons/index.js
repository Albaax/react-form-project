import React from 'react';
import './Buttons.css';

const Buttons = ({clickChange, allSet, buttonName, buttonId, buttonClass, 
                ButtonIconLeft, ButtonIconRight}) => {

    return (
        <button onClick={allSet ? clickChange : null} id={buttonId} className={buttonClass}>
            {ButtonIconLeft}
            {buttonName}
            {ButtonIconRight}
        </button>
    );
}

export default Buttons;