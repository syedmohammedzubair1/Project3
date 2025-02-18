import React from "react";
import About from "./components/Footer/About";
import Navbar from './components/Navbar';
import RegistrationForm from './components/Login/RegistrationForm';
import Contact from './components/Footer/Contact';

const App = () => {
    return (
        <div>
            <About />
            <Contact/>
            {/* hello */}
            {/* Your other content here */}
        </div>
    );
};

export default App;