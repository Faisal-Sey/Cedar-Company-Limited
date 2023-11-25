
import {Routes, Route} from "react-router-dom";
import Home from "./screens/home/index.jsx";
import About from "./screens/about/index.jsx";
import Services from "./screens/services/index.jsx";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
  )
}

export default App
