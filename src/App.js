import React, { useState } from "react";
import "./App.css";

import HomePage from "./components/HomePage";
import CreatePost from "./components/CreatePost";
import Auth from "./components/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: "1 hello world hello world",
        },
    ]);

    const addPosts = (title) => {
        const newPosts = [...posts, { title }];
        setPosts(newPosts);
        console.log(newPosts);
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Auth />} />
                <Route
                    path="/home"
                    element={posts.map((post, index) => (
                        <HomePage key={index} index={index} post={post} addPosts={addPosts} />
                    ))}
                />
                <Route path="/create" element={<CreatePost />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
