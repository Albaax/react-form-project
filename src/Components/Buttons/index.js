import React from 'react';
import './Buttons.css';

const Buttons = ({buttonName, buttonId, buttonClass, 
                ButtonIconLeft, ButtonIconRight}) => {

    return (
        <button id={buttonId} className={buttonClass}>
            {ButtonIconLeft}
            {buttonName}
            {ButtonIconRight}
        </button>
    );
}

export default Buttons;