import React, { useState } from "react";
import "./App.css";

import HomePage from "./components/HomePage";
import CreatePost from "./components/CreatePost";
import Auth from "./components/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
