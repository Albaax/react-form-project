import React from 'react';
import InputText from '../../InputText';
import Selects from '../../Selects';
import CheckBox from '../../CheckBox';
import Buttons from '../../Buttons';
import { ChevronRight } from 'react  feather'; 
import '../../InputText/InputText.css';

const FirstTab = () => {
    const sendData = (event) => {
        event.preventDefault();
    }

    return (
        <form method="post" onSubmit={sendData}>
        <section id="first-tab">
            <div id="content_1tab">
                <div className="input-block">
                    <InputText 
                    inputName="fullname" inputLabel="Full name *" 
                    InputType="text" placeholder="Foo Bar"/>
                </div>
                <div className="input-block">
                    <InputText 
                    inputName="nickname" inputLabel="Nickname" 
                    InputType="text" placeholder="Juanito"/>
                </div>
                <div className="input-block flex-line">
                    <div className="medium-input">
                        <InputText 
                        inputName="email" inputLabel="Email *" 
                        InputType="email" placeholder="foo@bar.com"/>
                    </div>
                    <div className="small-input">
                        <InputText 
                        inputName="phone" inputLabel="Phone" 
                        InputType="tel" placeholder="(83) 00000-0000"/>
                    </div>
                </div>
                <div>
                    <p className="line-title title">Birthday *<span id="erroBirthday"></span></p>
                </div>

                <div className="input-block flex-line">
                    <Selects size={31} start={1} time="day"/>
                    <Selects size={12} start={1} time="month"/>
                    <Selects size={110} start={1912} time="year"/>
                    <div className="four-inputs-by-line">
                        <label className="labels" htmlFor="age">Age</label>
                        <input type="text" id="age" className="inputs" disabled="disabled" placeholder="0" />
                    </div>
                </div>
                <div className="input-block">
                    <CheckBox />
                </div>
                <div className="input-block btn-to-right">
                    <Buttons buttonId="next1" buttonName="Next"
                    buttonClass="btn" ButtonIconRight={<ChevronRight className="svg-right"/>}/>
                </div>
            </div>
        </section>
    </form>
);
}

export default FirstTab;