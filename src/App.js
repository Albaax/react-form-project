import './App.css';
import React, { useState } from 'react';
import HeaderPage from './Components/HeaderPage';
import FormContainer from './Components/FormContainer';

const App = () => {
    const [pageTitle, setPageTitle] = useState('');
    
    return (
        <main>
            <HeaderPage title={pageTitle}/>
            <section>
                <FormContainer 
                title={pageTitle}
                changeTitle={setPageTitle}/>
            </section>
        </main>
    );
}

export default App;
