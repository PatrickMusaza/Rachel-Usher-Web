import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/get-in-touch" element={<GetInTouchPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

const HomePage = () => <div></div>;
const ProjectsPage = () => <div></div>;
const GetInTouchPage = () => <div></div>;
const ServicesPage = () => <div></div>;
