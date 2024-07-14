import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import UK from "./pages/Projects/UK/UkProjects";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<UK/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
