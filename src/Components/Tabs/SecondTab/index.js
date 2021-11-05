
import React, { useEffect, useState } from 'react';
import InputText from '../../InputText';
import Buttons from '../../Buttons';
import { ChevronRight } from 'react-feather'; 
import '../../InputText/InputText.css';

const SecondTab = ({changeStep}) => {
    const [linkedin, setLinkedin] = useState('');
    const [github, setGithub] = useState('');
    const [allSet, setAllSet] = useState(false);
    useEffect( () => {
        if(github.length > 0) setAllSet(true);
        else setAllSet(false)
    }, [github])
    useEffect(() => {
        if (localStorage.getItem('linkedin') !== null) {
          setLinkedin(localStorage.getItem('linkedin'));
        }
        if (localStorage.getItem('github') !== null) {
          setGithub(localStorage.getItem('github'));
        }
      }, []);
    
    useEffect(() => {
        localStorage.setItem('linkedin', linkedin);
        localStorage.setItem('github', github);
      }, [linkedin, github]);

    return (
            <section id="second-tab">
            <div id="content_2tab">
                <div className="input-block">
                    <InputText
                    inputValue={linkedin}
                    changeData={setLinkedin}  
                    inputName="linkedin" inputLabel="LinkedIn" 
                    inputType="text" placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/" />
                </div>

                <div className="input-block">
                    <InputText
                    inputValue={github}
                    changeData={setGithub} required
                    inputName="github" inputLabel="Github *" 
                    inputType="text" placeholder="https://github.com/foobar" />
                </div>

                <div className="btn-to-right btn-to-down">
                    <Buttons 
                    clickChange={changeStep} allSet={allSet}
                    buttonId="next2" buttonName="Next"
                    buttonClass="btn" ButtonIconRight={<ChevronRight className="svg-right"/>}/>                    
                </div>
            </div>
        </section>
    );
}

export default SecondTab;