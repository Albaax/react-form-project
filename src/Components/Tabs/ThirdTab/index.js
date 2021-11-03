import React from 'react';
import {Plus, Check, Heart} from 'react-feather';
import Buttons from '../../Buttons';
import InputText from '../../InputText';

const ThirdTab = () => {
    const sendData = (event) => {
        event.preventDefault();
    }

    return (
        <form method="POST" onSubmit={sendData}>
            <section id="third-tab">
                <div id="content_3tab">
                    <div className="input-block div-heart">
                        <label className="labels" htmlFor="certificates">Certificates</label>
                        <div id="input_btn">
                            <input type="text" id="certificates" className="input-heart"
                                placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/" />
                            <button id="btn_heart"><Heart id="heart-teste"/></button>
                        </div>
                    </div>
                    <div className="input-block btn-to-right btn-more">
                        <Buttons 
                        buttonName="More" buttonClass="btn button-more"
                        ButtonIconLeft={<Plus className="svg-left" />}
                        ButtonIconRight={<Check className="svg-right"/>}
                        />
                    </div>
                    <div className="input-block">
                        <InputText 
                        inputName="teamName" inputLabel="Team Name *" 
                        inputType="text" placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"/>
                    </div>

                    <div className="input-block">
                        <InputText 
                        inputName="institution" inputLabel="Institution *" 
                        inputType="text" placeholder="Universidade Federal da Paraíba"/>
                    </div>

                    <div className="input-block">
                        <InputText 
                        inputName="graduation" inputLabel="Graduation *" 
                        inputType="text" placeholder="Ciência da Computação"/>
                    </div>

                    <div className="input-block btn-to-right">
                        <Buttons buttonId="finish"
                        buttonName="Finish" buttonClass="btn button-more"
                        ButtonIconLeft={<Check className="svg-left" />}
                        />
                    </div>
                </div>
            </section>
        </form>
    );
}

export default ThirdTab;