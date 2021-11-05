import React, { useEffect, useState } from 'react';
import './TabNavigation.css';

const TabNavigation = ({step2, step3, currentStep, setCurrentStep}) => {
    const [active1, setActive1] = useState('active');
    const [active2, setActive2] = useState('');
    const [active3, setActive3] = useState('');

    useEffect( () => {
        if(currentStep === 0){
            setActive1('active');
            setActive2('');
            setActive3('');
        }
        if(currentStep === 1){
            setActive1('');
            setActive2('active');
            setActive3('');
        }
        if(currentStep === 2){
            setActive1('');
            setActive2('');
            setActive3('active');
        }
    }, [currentStep]);

    const handleClick1 = () => setCurrentStep(0);
    const handleClick2 = () => {
        if(step2) setCurrentStep(1);
    }
    const handleClick3 = () => {
        if(step3) setCurrentStep(2);
    }

    return (
        <>
            <div onClick={handleClick1} className={`tabs basic ${active1}`}>
                <span className="basic_span">Basic</span>
            </div>
            <div onClick={handleClick2} className={`tabs social ${active2}`}>
                <span className="social_span">Social</span>
            </div>
            <div onClick={handleClick3} className={`tabs certificates ${active3}`}>
                <span className="certificates_span">Certificates</span>
            </div>
        </>
        );
}

export default TabNavigation;