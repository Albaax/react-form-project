import React from 'react';
import './InputText.css';

const InputText = ({inputName, inputLabel, 
                    inputType, placeholder, 
                    changeData, inputValue, 
                    ...props}) => {
    const getData = event => {
        changeData(event.target.value);
    }
    
    return (
        <label className="labels" htmlFor={inputName}>
           {inputLabel}
           <input value={inputValue}
           onChange={getData}
           type={inputType} id={inputName}
           className="inputs" placeholder={placeholder}
           {...props} />
        </label> 
    );
}

export default InputText;