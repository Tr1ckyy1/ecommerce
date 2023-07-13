import { Outlet } from "react-router-dom";
import "./Layout.css";
import Header from "./Header";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
function Layout() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="container">
        <Outlet />
      </main>

      <Newsletter />
      <Footer />
    </>
  );
}

export default Layout;
