import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import UK from "./pages/Projects/UK/UkProjects";
import International from "./pages/Projects/International/International";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<UK />} />
          <Route path="/international" element={<International />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
