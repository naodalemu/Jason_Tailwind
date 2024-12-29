import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Stages from "./components/Stages";
import "./App.css";
import Rizigers from "./components/Rizigers";
import Overzicht from "./components/Overzicht";

function App() {
  const [activeStage, setActiveStage] = useState(1);

  return (
    <div>
      <Router>
        <Header />
        <section className="max-w-[1440px] m-auto">
          <Stages activeStage={activeStage} setActiveStage={setActiveStage} />
          <Routes>
            <Route path="/" element={<Rizigers setActiveStage={setActiveStage} />} />
            <Route path="/overzicht" element={<Overzicht />} />
          </Routes>
        </section>
      </Router>
    </div>
  );
}

export default App;
