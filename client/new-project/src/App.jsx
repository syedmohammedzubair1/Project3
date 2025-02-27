import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Routing from "./components/Routing";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import { InputData } from "./components/Webinar/InputData";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routing />
      <Footer />
      {/* <InputData/> */}

    </div>
  );
};

export default App;
