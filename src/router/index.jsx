import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProtectedRoute from "../components/auth/ProtectedRoute.jsx";
import RootLayout from "../components/layout/RootLayout.jsx";
import Home from "../pages/Home.jsx";
import Blog from "../pages/Blog.jsx";
import Article from "../pages/Article.jsx";
import NewArticle from "../pages/NewArticle.jsx";
import EditArticle from "../pages/EditArticle.jsx";
import Contact from "../pages/Contact.jsx";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";
import PasswordReset from "../pages/PasswordReset.jsx";
import PasswordResetConfirm from "../pages/PasswordResetConfirm.jsx";
import NotFound from "../pages/NotFound.jsx";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/blog/new"
            element={
              <ProtectedRoute>
                <NewArticle />
              </ProtectedRoute>
            }
          />
          <Route path="/blog/:id" element={<Article />} />
          <Route
            path="/blog/:id/edit"
            element={
              <ProtectedRoute>
                <EditArticle />
              </ProtectedRoute>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="/password-reset/:userId/:token" element={<PasswordResetConfirm />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
