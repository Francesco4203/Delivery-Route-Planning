import {Home} from "./components/home.js"
import {About} from "./components/about.js"
import './App.css';
import {Route, Routes, Link} from "react-router-dom"
import {Navbar} from "./components/modules/navbar.js";
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </>
  );
}

export default App;
