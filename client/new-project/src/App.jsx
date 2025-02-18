import React from "react";
import About from "./components/Footer/About";
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import RegistrationForm from './components/Login/RegistrationForm';
import Contact from './components/Footer/Contact';


const App = () => {
    return (
        <div>

            <Navbar />

            <About />
            <Contact/>
            {/* hello */}
            {/* Your other content here */}
            <Carousel/>
        </div>
    );
};

export default App;