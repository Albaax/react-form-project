import React from 'react';
import './Selects.css';

const Selects = ({size, start, time, changeData, selectValue}) => {
    const optionNumbers = Array.from(new Array(size),(_, index) => index + start);
    const getData = event => {
        changeData(event.target.value);
    }

    return (
        <div className="grid-collum four-inputs-by-line">
            <label className="labels" htmlFor={time}>
                {time.charAt(0).toUpperCase() + time.slice(1)}
                <select required
                onChange={getData} value={selectValue}
                className="select" id={time} name="day">
                    <option value=""></option>
                    {optionNumbers.map( (optionNumber, index) => {
                        return <option key={index}>{optionNumber}</option>
                    })}
                </select>
            </label>
        </div>
    );
}

export default Selects;