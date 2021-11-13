import React from 'react';
import './CheckBox.css';

const CheckBox = ({changeData}) => {
    const getData = event => {
        if(event.target.checked) changeData('Checked');
        else changeData('');
    }

    return (
        <label className="check-terms">I accept the terms and privacy
            <input
            required 
            onChange={getData} type="checkbox" />
            <span className="checkmark"></span>
        </label>
    );
}

export default CheckBox;