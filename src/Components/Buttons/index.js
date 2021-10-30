import React from 'react';

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