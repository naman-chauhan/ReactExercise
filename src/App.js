import React from "react";
import "./App.css";
import "./messaging_init_in_sw";
import HomePage from "./components/Home/HomePage";
import CreatePost from "./components/Post/CreatePost";
import Auth from "./components/Auth/Auth";
import ViewPost from "./components/Post/ViewPost";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateTechxPost from "./components/Post/CreateTechxPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/create" element={<CreateTechxPost />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/view" element={<ViewPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
