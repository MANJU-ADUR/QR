import React from "react";
import QrCodeGenerator from "./Component/QrCodeGenerator";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "./Component/Card";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<QrCodeGenerator />} />
          <Route path="/createcard" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
