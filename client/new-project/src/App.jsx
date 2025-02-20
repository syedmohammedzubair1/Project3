



    <Router>
      <Routes>
        <Route path="/" element={<ContentList />} />  {/* Home page shows all articles */}
        <Route path="/content/:id" element={<ContentDetail />} />  {/* Detailed view */}
      </Routes>
    </Router>
   <LandingPage />
    
import React, { useEffect } from "react";
import Navbar from './components/Navbar';
import Footer from "./components/Footer/Footer";
import ContentList from "./components/ContentList";
import LandingPage from "./components/LandingPage";
import ContentDetail from "./components/ContentDetail";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import Routing from "./components/Routing";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
  
      <header>
        <Navbar />
      </header>

      <Routing/>
      <Footer />
    </div>
  );
}

export default App;
