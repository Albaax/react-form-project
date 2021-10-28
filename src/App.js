import './App.css';
import React, { useState } from 'react';
import HeaderPage from './Components/HeaderPage';
import FormContainer from './Components/FormContainer';

const App = () => {
    const [pageTitle, setPageTitle] = useState("First Tab");

    return (
        <main>
            <HeaderPage title={pageTitle}/>
            <section>
                <FormContainer/>
            </section>
        </main>
    );
}

export default App;
