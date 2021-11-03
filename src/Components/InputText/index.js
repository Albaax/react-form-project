import React from 'react';
import './InputText.css';

const InputText = ({inputName, inputLabel, inputType, placeholder, changeData}) => {
    const getData = event => {
        changeData(event.target.value);
    }

    return (
        <label className="labels" htmlFor={inputName}>
           {inputLabel}
           <input 
           onChange={getData}
           type={inputType} id={inputName}
           className="inputs" placeholder={placeholder} />
        </label> 
    );
}

export default InputText;