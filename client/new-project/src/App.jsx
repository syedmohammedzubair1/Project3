import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContentList from "./components/ContentList";
import ContentDetail from "./components/ContentDetail";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<ContentList />} />  {/* Home page shows all articles */}
        <Route path="/content/:id" element={<ContentDetail />} />  {/* Detailed view */}
      </Routes>
    </Router>
   <LandingPage />
    </>
  );
}

export default App;
