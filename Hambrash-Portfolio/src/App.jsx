import { About } from "./components/About"
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Home } from "./components/Home"
import { Navigation } from "./components/Navigation"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Project } from "./components/Project";

function App() {
 
  return (
    <>
      <Router>     
      <Navigation />   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>    
    </>
  )
}

export default App
