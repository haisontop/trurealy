import { Button } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home/Home";
import Homecosumer from "./pages/Home/HomeCosumer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/consumer" element={<Homecosumer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
