import React from 'react';
import InputText from '../../InputText';
import Buttons from '../../Buttons';
import { ChevronRight } from 'react-feather'; 
import '../../InputText/InputText.css';

const SecondTab = () => {
    const sendData = (event) => {
        event.preventDefault();
    }

    return (
        <form method="post" onSubmit={sendData}>
             <section id="second-tab">
                <div id="content_2tab">
                    <div className="input-block">
                        <InputText 
                        inputName="linkedin" inputLabel="LinkedIn" 
                        inputType="text" placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/" />
                    </div>

                    <div className="input-block">
                        <InputText 
                        inputName="github" inputLabel="Github *" 
                        inputType="text" placeholder="https://github.com/foobar" />
                    </div>

                    <div className="btn-to-right btn-to-down">
                        <Buttons 
                        buttonId="next2" buttonName="Next"
                        buttonClass="btn" ButtonIconRight={<ChevronRight className="svg-right"/>}/>                    
                    </div>
                </div>
            </section>

        </form>    
    );
}

export default SecondTab;