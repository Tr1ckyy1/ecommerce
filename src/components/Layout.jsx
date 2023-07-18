import { Outlet } from "react-router-dom";
import "./Layout.css";
import Header from "./Header";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <footer>
        <Newsletter />
        <Footer />
      </footer>
    </>
  );
}

export default Layout;
