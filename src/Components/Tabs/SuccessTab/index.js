import React from 'react';
import Buttons from '../../Buttons';
import { XCircle } from 'react-feather';
import '../Tabs.css';

const SuccessTab = () => {
    const allSet = true;
    return (
        <div className="success-div">
            <p className="success-p-1">Your data has been sent successfully!</p>
            <p>Full Name: {localStorage.getItem('name')}</p>
            {localStorage.getItem('nickname') && (
            <p>Nickname: {localStorage.getItem('nickname')}</p>
            )}
            <p>Email: {localStorage.getItem('email')}</p>
            {localStorage.getItem('phone') && (
            <p>Phone: {localStorage.getItem('phone')}</p>
            )}
            <p>
            Birthday:{' '}
            {`${localStorage.getItem('day')}/${localStorage.getItem(
            'month',
            )}/${localStorage.getItem('year')}`}
            </p>
            <p>Age: {localStorage.getItem('age')}</p>
            {localStorage.getItem('linkedin') && (
            <p>Linkedin: {localStorage.getItem('linkedin')}</p>
            )}
            <p>Github: {localStorage.getItem('github')}</p>
            {localStorage.getItem('certificatesList') && (
            <p>Certificates:</p>
            )}
            <p>Team Name: {localStorage.getItem('teamname')}</p>
            <p>Institution: {localStorage.getItem('institution')}</p>
            <p>Graduation: {localStorage.getItem('graduation')}</p>
            <div className="btn-to-right btn-close">
                <Buttons 
                clickChange={ () => {
                    localStorage.clear();
                    window.location.reload();
                }} allSet={allSet}
                buttonId="close" buttonName="Close"
                buttonClass="btn" ButtonIconRight={<XCircle className="svg-right"/>}/>
            </div>
      </div>
    );
}

export default SuccessTab;