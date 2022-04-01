import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

import styles from "./assets/styles.scss";

import TheHeader from "./components/Layout/TheHeader/TheHeader";
import Main from "./components/Layout/Main/Main";
import Home from "./Pages/Home/Home";
import Episodes from "./Pages/Episodes/Episodes";
import Characters from "./Pages/Characters/Characters";

function App() {
  return (
    <Router className="App">
      <TheHeader />

      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Episodes" element={<Episodes />} />
          <Route path="/Characters" element={<Characters />} />
        </Routes>
      </Main>
    </Router>
  );
}

export default App;
