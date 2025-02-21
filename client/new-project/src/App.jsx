import React from 'react';
import { Webinar } from './components/Webinar/Webinar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomeWebinar } from './components/Webinar/HomeWebinar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <div>
            {/* <Navbar /> */}
            {/* Your other content here */}
            {/* <Carousel/> */}
            {/* <HomeWebinar/> */}
            {/* <Webinar/> */}

            <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeWebinar />} />
                <Route path="/webinar" element={<Webinar />} />
            </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
