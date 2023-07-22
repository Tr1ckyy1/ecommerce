import logo from "../images/newlogo2.png";

import { useItems } from "../Context";
import { Link } from "react-router-dom";
import { useState } from "react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import ShowCart from "./carts/ShowCart";
import Toast from "./Toast";

function Header() {
  const { windowWidth, openCart, setOpenCart } = useItems();
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
    <>
      {/* OVERLAY */}
      <div
        onClick={setOpenCart}
        className={`${openCart ? "page-overlay" : ""}`}
      ></div>
      {/* CART */}
      <ShowCart />

{/* TOAST */}
<Toast/>
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

        {windowWidth > 600 ? <Desktop /> : <Mobile />}
      </nav>
    </>
  );
}

export default Header;
