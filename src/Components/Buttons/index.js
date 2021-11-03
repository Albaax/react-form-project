import React from 'react';
import './Buttons.css';

const Buttons = ({clickChange, buttonName, buttonId, buttonClass, 
                ButtonIconLeft, ButtonIconRight}) => {

    return (
        <button onClick={clickChange} id={buttonId} className={buttonClass}>
            {ButtonIconLeft}
            {buttonName}
            {ButtonIconRight}
        </button>
    );
}

export default Buttons;