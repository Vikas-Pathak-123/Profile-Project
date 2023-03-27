import React from "react";
import { Routes, Route } from "react-router-dom";
import GalleryPage from "./components/Gallery/GalleryPage";
import LandingPage from "./components/Landing/LandingPage";
import NotFound from "./components/NotFound/NotFound";
import PostsDetailPage from "./components/Post/PostsDetailPage";
import ProfileHomePage from "./components/Profile/ProfileHomePage";
import ToDoPage from "./components/Todo/ToDoPage";

const App = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/users/:id" element={<ProfileHomePage />} />
    <Route path="/post" element={<PostsDetailPage />} />
    <Route path="/gallery" element={<GalleryPage />} />
    <Route path="/todo" element={<ToDoPage />} />
    <Route path="/*" element={<NotFound />} />
  </Routes>
);

export default App;