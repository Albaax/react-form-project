import './App.css';
import React from 'react';
import HeaderPage from './Components/HeaderPage';
import FormContainer from './Components/FormContainer';

const App = () => {

    return (
        <main>
            <HeaderPage/>
            <section>
                <FormContainer/>
            </section>
        </main>
    );
}

export default App;
