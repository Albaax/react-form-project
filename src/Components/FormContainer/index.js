import React, { useState, useEffect } from 'react';
import './FormContainer.css';
import '../Tabs/Tabs.css';
import '../Buttons/Buttons.css';
import FirstTab from '../Tabs/FirstTab';
import TabNavigation from '../TabNavigation';
import SecondTab from '../Tabs/SecondTab';
import ThirdTab from '../Tabs/ThirdTab';
import SuccessTab from '../Tabs/SuccessTab';

const FormContainer = ({changeTitle}) => {
    const titles = ['First Tab', 'Second Tab', 'Third Tab', 'Success'];
    const [currentStep, setCurrentStep] = useState(0);  
    const [isActive2, setIsActive2] = useState(false);  
    const [isActive3, setIsActive3] = useState(false);  
    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    } 
    const sendData = event => {
        event.preventDefault();
    }
    const forms = [
        <FirstTab changeStep={nextStep}/>,
        <SecondTab changeStep={nextStep}/>,
        <ThirdTab changeStep={nextStep}/>,
        <SuccessTab />
    ];
    useEffect( () => {
        changeTitle(titles[currentStep]);
        if(currentStep === 1) setIsActive2(true);
        if(currentStep === 2) setIsActive3(true);
    }, [currentStep]);
      
    return (
        <div className="form-container">
            <div className="tab-container">
                {currentStep === 3 ? '' : 
                <>
                    <h1 className="title">Team Sign Up</h1>
                    <div className="tabs-container">
                        <TabNavigation
                        step2={isActive2} 
                        step3={isActive3} 
                        setCurrentStep={setCurrentStep}
                        currentStep={currentStep}/>
                    </div>
                </>}
                <form method="POST" onSubmit={sendData}>
                    { forms[currentStep] }
                </form>
            </div>
        </div>
    );
}

export default FormContainer;