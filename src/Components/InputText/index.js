import React from 'react';
import './InputText.css';

const InputText = ({inputName, inputLabel, inputType, placeholder}) => {
    
    return (
        <label className="labels" htmlFor={inputName}>
           {inputLabel}
           <input type={inputType} id={inputName}
             className="inputs" placeholder={placeholder} />
        </label> 
    );
}

export default InputText;