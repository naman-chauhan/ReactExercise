import React from "react";
import "./App.css";
import "./messaging_init_in_sw";
import HomePage from "./components/Home/HomePage";
import CreatePost from "./components/Post/CreatePost";
import Auth from "./components/Auth/Auth";
import EditPost from "./components/Post/EditPost";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/edit" element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
