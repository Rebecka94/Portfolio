import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/global.css";
import App from "./views/App";
import Home from "./views/Home";
import AboutPage from "./views/AboutPage";
import ProjectPage from "./views/ProjectPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects/:slug" element={<ProjectPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
