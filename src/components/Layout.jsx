import { NavLink, Link, Outlet } from "react-router-dom";
import logo from "../images/newlogo2.png";
import "./Layout.css";
import { BsCart2 } from "react-icons/bs";
import { useItems } from "../Context";
function Layout() {
  const { windowWidth } = useItems();
  return (
    <>
      <header>
        <nav className="layout-navbar">
          <Link to="/">
            <img className="main-logo" src={logo} />
          </Link>

          {windowWidth > 600 ? (
            <div>
              <NavLink to="categories">categories</NavLink>
              <NavLink to="categories?type=Lamp">lamps</NavLink>
              <NavLink to="categories?type=Furniture">furniture</NavLink>
              <NavLink>
                <BsCart2 style={{ fontSize: "25px" }} />
              </NavLink>
            </div>
          ) : null}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
