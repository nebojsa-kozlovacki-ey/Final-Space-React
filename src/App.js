import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.scss";

import styles from "./assets/styles.scss";

import TheHeader from "./components/Layout/TheHeader/TheHeader";
import Main from "./components/Layout/Main/Main";
import Home from "./Pages/Home/Home";
import Episodes from "./Pages/Episodes/Episodes";

function App() {
  return (
    <Router className="App">
      <TheHeader />

      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Episodes" element={<Episodes />} />
        </Routes>
      </Main>
    </Router>
  );
}

export default App;
