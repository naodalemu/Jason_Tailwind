import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
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
        <section className="px-32">  
          <section className="xl:max-w-[1200px] 2xl:max-w-[1440px] m-auto">
            <Stages activeStage={activeStage} setActiveStage={setActiveStage} />
            <Routes>
              <Route path="/" element={<Rizigers setActiveStage={setActiveStage} />} />
              <Route path="/overzicht" element={<Overzicht />} />
            </Routes>
          </section>
        </section>
      </Router>
    </div>
  );
}

export default App;
