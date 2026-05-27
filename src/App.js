import './App.css';
import { useState } from 'react';

import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");

  const toggleMode = () => {

    const newMode = mode === "light" ? "dark" : "light";

    setMode(newMode);

    document.body.style.backgroundColor =
      newMode === "dark" ? "#121212" : "white";

    document.body.style.color =
      newMode === "dark" ? "white" : "black";
  };

  return (
    <Router>

      <Navbar
        title="TextCraft"
        mode={mode}
        toggleMode={toggleMode}
      />

      <div className="container my-3">

        <Routes>

          <Route
            path="/"
            element={
              <TextForm
                heading="Enter the text to analyze below"
                mode={mode}
              />
            }
          />

          <Route
            path="/about"
            element={<About />}
          />

        </Routes>

      </div>

    </Router>
  );
}

export default App;