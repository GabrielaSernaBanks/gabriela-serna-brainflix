import Nav from "./components/Nav/Nav";
import MainVideo from "./pages/MainVideo/MainVideo";
import React from "react";
import "./App.scss";
import UploadPage from "./pages/UploadPage/UploadPage";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<MainVideo />} />
        <Route path="upload" element={<UploadPage />} />
        <Route path="/video/:id" element={<MainVideo />} />
      </Routes>
      </div>
  );
}

export default App;
