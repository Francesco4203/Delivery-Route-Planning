import {Home} from "./components/templates/home/home"
import {About} from "./components/templates/about/about"
import {Planning} from "./components/templates/planning/planning"
import './App.css';
import {Route, Routes, Link} from "react-router-dom"
import {Navbar} from "./components/modules/navbar/navbar";
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/planning" element={<Planning/>}/>
      </Routes>
    </>
  );
}

export default App;
