import { useState, useEffect } from "react";
import {Home} from "./components/templates/home/home"
import {About} from "./components/templates/about/about"
import {Planning} from "./components/templates/planning/planning"
import './App.css';
import {Route, Routes, Link} from "react-router-dom"
import {Navbar} from "./components/modules/navbar/navbar";
import ScriptTag from "react-script-tag/lib/ScriptTag";

 /* global google */
function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDb0JylAh2lmanpChp9pCFmdeA4Fpajrr4&libraries=places`;
    script.onload = () => setLoaded(true);
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <Navbar/>
      {loaded && (
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/planning" element={<Planning/>}/>
        </Routes>
      )}
    </div>
  );
}

export default App;
