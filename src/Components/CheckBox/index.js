import React from 'react';
import './CheckBox.css';

const CheckBox = () => {

    return (
        <label className="check-terms">I accept the terms and privacy
            <input type="checkbox" />
            <span className="checkmark"></span>
        </label>
    );
}

export default CheckBox;