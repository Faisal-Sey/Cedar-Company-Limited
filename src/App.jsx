
import {Routes, Route} from "react-router-dom";
import Home from "./screens/home/index.jsx";
import About from "./screens/about/index.jsx";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
  )
}

export default App
