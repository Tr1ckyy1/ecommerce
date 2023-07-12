import { NavLink, Link, Outlet } from "react-router-dom";
import "./Layout.css";
import Header from "./Header";
function Layout() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
