import React from "react";
import Navbar from "./components/Navbar"; 
import About from "./components/Footer/About";
// import Contact from "./components/Footer/Contact";
import Footer from "./components/Footer/Footer";
import RegistrationForm from "./components/Login/RegistrationForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min"
const App = () => {
    return (
        <div>
            {/* Navigation Bar */}
            <Navbar /> 

            {/* Main Content */}
          
                <About />
                
          

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default App;
