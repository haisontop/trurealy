import { Button } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Aboutconsumer from "./pages/about/AboutConsumer";
import Home from "./pages/Home/Home";
import Homecosumer from "./pages/Home/HomeCosumer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/homeConsumer" element={<Homecosumer />} />
          <Route path="/aboutConsumer" element={<Aboutconsumer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
