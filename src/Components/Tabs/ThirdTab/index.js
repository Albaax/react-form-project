import React, { useEffect, useState } from 'react';
import {Plus, Check, Heart} from 'react-feather';
import Buttons from '../../Buttons';
import InputText from '../../InputText';

const ThirdTab = ({changeStep}) => {
    const [teamName, setTeamName] = useState('');
    const [institution, setInstitution] = useState('');
    const [graduation, setGraduation] = useState('');
    const [allSet, setAllSet] = useState(false);
    useEffect( () => {
        if(teamName.length > 0 &&
            institution.length > 0 &&
            graduation.length > 0){
            setAllSet(true);
        }
        else setAllSet(false);
    }, [teamName, institution, 
        graduation]);
    useEffect( () => {
        if (localStorage.getItem('teamname') !== null) {
            setTeamName(localStorage.getItem('teamname'));
        }
        if (localStorage.getItem('institution') !== null) {
            setInstitution(localStorage.getItem('institution'));
        }
        if (localStorage.getItem('graduation') !== null) {
            setGraduation(localStorage.getItem('graduation'));
        }
    }, []);
    useEffect( () => {
        localStorage.setItem('teamname', teamName);
        localStorage.setItem('institution', institution);
        localStorage.setItem('graduation', graduation);
    }, [teamName, institution, graduation]);
    
    return (
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
                    value={teamName}
                    changeData={setTeamName} required
                    inputName="teamName" inputLabel="Team Name *" 
                    inputType="text" placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"/>
                </div>

                <div className="input-block">
                    <InputText 
                    value={institution}
                    changeData={setInstitution} required
                    inputName="institution" inputLabel="Institution *" 
                    inputType="text" placeholder="Universidade Federal da Paraíba"/>
                </div>

                <div className="input-block">
                    <InputText
                    value={graduation} 
                    changeData={setGraduation} required
                    inputName="graduation" inputLabel="Graduation *" 
                    inputType="text" placeholder="Ciência da Computação"/>
                </div>

                <div className="input-block btn-to-right">
                    <Buttons
                    clickChange={changeStep} allSet={allSet} 
                    buttonId="finish"
                    buttonName="Finish" buttonClass="btn button-more"
                    ButtonIconLeft={<Check className="svg-left" />}
                    />
                </div>
            </div>
        </section>
    );
}

export default ThirdTab;