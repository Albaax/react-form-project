import React, { useState } from 'react';
import './FormContainer.css';
import '../Tabs/Tabs.css';
import '../Buttons/Buttons.css';
import FirstTab from '../Tabs/FirstTab';
import TabNavigation from '../TabNavigation';
import SecondTab from '../Tabs/SecondTab';
import ThirdTab from '../Tabs/ThirdTab';

const FormContainer = () => {
    const tabs = ['Basic', 'Social', 'Certificates'];
    const [isActive, setActive] = useState({
        active1: true,
        active2: false,
        active3: false});
    const [currentStep, setCurrentStep] = useState(2);    
    const forms = [
        <FirstTab />,
        <SecondTab />,
        <ThirdTab />
    ];
    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    }
      return (
        <div className="form-container">
            <div className="tab-container">
                <h1 className="title">Team Sign Up</h1>
                <div className="tabs-container">
                    {tabs.map( (tab, index) => {
                        return (
                            <TabNavigation key={index} currentTab={tab}
                            activeTab={`${isActive}.active${index+1}` ? 'active' : ''}
                            onClick={() => {setActive(!`${isActive}.active${index+1}`)}}/>
                        )
                    })}
                </div>
                { forms[currentStep] }
            </div>
        </div>
    );
}

export default FormContainer;