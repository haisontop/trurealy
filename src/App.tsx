import React from "react";
import { Button } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aboutconsumer from "./pages/about/AboutConsumer";
import Home from "./pages/home/Home";
import Homecosumer from "./pages/home/HomeCosumer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/consumer/home" element={<Homecosumer />} />
          <Route path="/consumer/about" element={<Aboutconsumer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
