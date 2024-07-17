import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import UK from "./pages/Projects/UK/UkProjects";
import International from "./pages/Projects/International/International";
import Progress from "./pages/Projects/In Progress/Progress";
import GetInTouch from "./pages/Get In Touch/GetInTouch";
import Services from "./pages/Services/Services";
import Journal from "./pages/Journal/Journal";
import Careers from "./pages/Careers/Careers";
import Privacy from "./pages/Privacy/Privacy";
import Press from "./pages/Press/Press";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<UK />} />
          <Route path="/international" element={<International />} />
          <Route path="/in-progress" element={<Progress />} />
          <Route path="/get-in-touch" element={<GetInTouch />} />
          <Route path="/our-services" element={<Services />} />
          <Route path="/press" element={<Press />} />
          <Route path="/journal-entries" element={<Journal />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
