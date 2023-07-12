import logo from "../images/newlogo2.png";
import { BsCart2 } from "react-icons/bs";
import { useItems } from "../Context";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const { windowWidth } = useItems();

  return (
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
  );
}

export default Header;
