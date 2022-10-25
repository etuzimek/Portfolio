import React from "react";
import { Routes, Route, BrowserRouter, } from "react-router-dom";
import Home from "./components/Home"

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />              //musze zmienic na swoje podstrony
          <Route path="/register" element={<Register />} /> */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
