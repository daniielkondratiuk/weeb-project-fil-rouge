import { Link, Outlet } from "react-router-dom";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function RootLayout() {
  return (
    <div className="app">
      <Header>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
        </nav>
      </Header>

      <main className="main">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

