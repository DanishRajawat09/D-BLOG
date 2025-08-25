import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./routes/HomePage.jsx";
import PostListPage from "./routes/PostListPage.jsx";
import LoginPage from "./routes/LoginPage.jsx";
import WritePage from "./routes/writePage.jsx";
import RegisterPage from "./routes/RegisterPage.jsx";
import SinglePostPage from "./routes/SinglePostPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./layout/MainLayout.jsx";

const RouteWrapper = () => (
  <BrowserRouter>
    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostListPage />} />
        <Route path="/:slug" element={<SinglePostPage />} />
        <Route path="/write-post" element={<WritePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouteWrapper />
  </StrictMode>
);
