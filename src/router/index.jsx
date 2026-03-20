import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home.jsx";
import Contact from "../pages/Contact.jsx";
import Login from "../pages/Login.jsx";
import NotFound from "../pages/NotFound.jsx";
import RootLayout from "../components/layout/RootLayout.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "contact", element: <Contact /> },
      { path: "login", element: <Login /> },
      { path: "*", element: <NotFound /> }
    ],
  },
]);

