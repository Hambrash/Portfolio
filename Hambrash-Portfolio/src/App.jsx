import { About } from "./components/About"
import { Experience } from "./components/Experience";
import { Home } from "./components/Home"
import { Navigation } from "./components/Navigation"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";






function App() {
 

  return (
    <>
      <Router>
     
      <Navigation />

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Experience" element={<Experience />} />
      </Routes>
    </Router>

    

    

     
    </>
  )
}

export default App
