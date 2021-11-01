import React from 'react';
import './Selects.css';

const Selects = ({size, start, time}) => {
    const optionNumbers = Array.from(new Array(size),(_, index) => index + start);

    return (
        <div className="grid-collum four-inputs-by-line">
            <label className="labels" htmlFor={time}>
                {time.charAt(0).toUpperCase() + time.slice(1)}
                <select className="select" id={time} name="day">
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