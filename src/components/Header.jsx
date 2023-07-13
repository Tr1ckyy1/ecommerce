import logo from "../images/newlogo2.png";
import { BsCart2 } from "react-icons/bs";
import { useItems } from "../Context";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Header() {
  const { windowWidth } = useItems();
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <nav className={`layout-navbar ${sticky ? "cont-sticky" : ""}`}>
      <Link to="/">
        <img
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
          className="main-logo"
          src={logo}
        />
      </Link>

      {windowWidth > 600 ? (
        <div>
          <NavLink
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            }
            to="categories"
          >
            categories
          </NavLink>
          <NavLink
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            }
            to="categories?type=Lamp"
          >
            lamps
          </NavLink>
          <NavLink
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            }
            to="categories?type=Furniture"
          >
            furniture
          </NavLink>
          <NavLink>
            <BsCart2 style={{ fontSize: "25px" }} />
          </NavLink>
        </div>
      ) : null}
    </nav>
  );
}

export default Header;
