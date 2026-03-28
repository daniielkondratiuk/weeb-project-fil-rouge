import { BrowserRouter, Route, Routes } from "react-router-dom";

import RootLayout from "../components/layout/RootLayout.jsx";
import Home from "../pages/Home.jsx";
import Blog from "../pages/Blog.jsx";
import Contact from "../pages/Contact.jsx";
import Login from "../pages/Login.jsx";
import NotFound from "../pages/NotFound.jsx";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

