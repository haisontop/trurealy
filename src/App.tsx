import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Router from "./routes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
