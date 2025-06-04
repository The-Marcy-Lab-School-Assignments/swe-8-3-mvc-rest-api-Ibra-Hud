import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import GundumDetails from "./Pages/GundumDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/gundum/:id" element={<GundumDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
