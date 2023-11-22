
import {Routes, Route} from "react-router-dom";
import Home from "./screens/home/index.jsx";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
  )
}

export default App
