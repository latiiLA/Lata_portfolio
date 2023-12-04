import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//component imports

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Projects from "./pages/Projects";
import Contact_me from "./pages/Contact_me";
import Socials from "./components/Socials";
import Header2 from "./components/Header";
import Card from "./components/Project_Card";
import About from "./components/About";
import EduTimeline from "./components/EduTimeline";
import Skills from "./pages/Skills";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact_me" element={<Contact_me />} />
        <Route path="/socials" element={<Socials />} />
        <Route path="/header2" element={<Header2 />} />
        <Route path="/card" element={<Card />} />
        <Route path="/about" element={<About />} />
        <Route path="/timeline" element={<EduTimeline />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
