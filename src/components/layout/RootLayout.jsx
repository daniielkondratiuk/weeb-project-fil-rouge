import { Outlet } from "react-router-dom";

import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";

export default function RootLayout() {
  return (
    <div className="app">
      <Header />

      <main className="main">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

