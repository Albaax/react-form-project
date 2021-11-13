  import React, { useEffect, useState } from 'react';
  import InputText from '../../InputText';
  import Selects from '../../Selects';
  import CheckBox from '../../CheckBox';
  import Buttons from '../../Buttons';
  import { ChevronRight } from 'react-feather'; 
  import '../../InputText/InputText.css';
  import '../Tabs.css';
  
  const FirstTab = ({changeStep}) => {
    const [fullName, setFullName] = useState('');
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [day, setDay] = useState();
    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(0);
    const [age, setAge] = useState(0);
    const [check, setCheck] = useState();
    const [allSet, setAllSet] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('name') !== null) {
          setFullName(localStorage.getItem('name'));
        }
        if (localStorage.getItem('nickname') !== null) {
          setNickname(localStorage.getItem('nickname'));
        }
        if (localStorage.getItem('email') !== null) {
          setEmail(localStorage.getItem('email'));
        }
        if (localStorage.getItem('phone') !== null) {
          setPhone(localStorage.getItem('phone'));
        }
        if (localStorage.getItem('day') !== null) {
          setDay(localStorage.getItem('day'));
        }
        if (localStorage.getItem('month') !== null) {
          setMonth(localStorage.getItem('month'));
        }
        if (localStorage.getItem('year') !== null) {
          setYear(localStorage.getItem('year'));
        }
        if (localStorage.getItem('age') !== null) {
          setAge(localStorage.getItem('age'));
        }
        if (localStorage.getItem('checked') !== null) {
          setCheck(localStorage.getItem('checked'));
        }
      }, []);
  
    useEffect(() => {
        localStorage.setItem('name', fullName);
        localStorage.setItem('nickname', nickname);
        localStorage.setItem('email', email);
        localStorage.setItem('phone', phone);
        localStorage.setItem('day', day);
        localStorage.setItem('month', month);
        localStorage.setItem('year', year);
        localStorage.setItem('age', age);
        localStorage.setItem('checked', check);
    }, [fullName,
        nickname,
        email,
        phone,
        day,
        month,
        year,
        age,
        check]
    );

    useEffect( () => {
        const birth = new Date(year, month - 1, day);
        if (year === 0) {
          setAge('');
        } else if (year !== 0) {
          setAge(
            Math.floor(
              Math.ceil(
                Math.abs(birth.getTime() - new Date().getTime()) /
                  (1000 * 3600 * 24),
              ) / 365.25,
            ),
          );
        }
      }, [day, month, year]);
    
    useEffect( () => {
        if(fullName.length > 0 &&
            email.length > 0 &&
            age !== 0 &&
            check === 'Checked'){
                setAllSet(true);
        }
        else setAllSet(false);
    }, [fullName, email, 
        day, month, 
        year, age, 
        check]);

    return (
        <section id="first-tab">
            <div id="content_1tab">
                <div className="input-block">
                    <InputText 
                    inputValue={fullName}
                    changeData={setFullName} required                      
                    inputName="fullname" inputLabel="Full name *" 
                    inputType="text" placeholder="Foo Bar"/>
                </div>
                <div className="input-block">
                    <InputText
                    inputValue={nickname}
                    changeData={setNickname}
                    inputName="nickname" inputLabel="Nickname" 
                    inputType="text" placeholder="Juanito"/>
                </div>
                <div className="input-block flex-line">
                    <div className="medium-input">
                        <InputText 
                        inputValue={email}
                        changeData={setEmail} required 
                        inputName="email" inputLabel="Email *" 
                        inputType="email" placeholder="foo@bar.com"/>
                    </div>
                    <div className="small-input">
                        <InputText
                        inputValue={phone}
                        changeData={setPhone} 
                        inputName="phone" inputLabel="Phone" 
                        inputType="tel" placeholder="(83) 00000-0000"/>
                    </div>
                </div>
                <div>
                    <p className="line-title title">Birthday *</p>
                </div>

                <div className="input-block flex-line">
                    <Selects 
                    changeData={setDay} selectValue={day}
                    size={31} start={1} time="day"/>
                    <Selects 
                    changeData={setMonth} selectValue={month} 
                    size={12} start={1} time="month"/>
                    <Selects 
                    changeData={setYear} selectValue={year}
                    size={110} start={1912} time="year"/>
                    <div className="four-inputs-by-line">
                        <label className="labels" htmlFor="age">Age</label>
                        <input value={age} 
                        type="text" id="age" 
                        className="inputs" disabled="disabled" 
                        placeholder="0" />
                    </div>
                </div>
                <div className="input-block">
                    <CheckBox changeData={setCheck}/>
                </div>
                <div className="input-block btn-to-right">
                    <Buttons 
                    clickChange={changeStep} allSet={allSet}
                    buttonId="next1" buttonName="Next"
                    buttonClass="btn" ButtonIconRight={<ChevronRight className="svg-right"/>}/>
                </div>
            </div>
        </section>
    );
}

export default FirstTab;