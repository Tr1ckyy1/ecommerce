import { BsCart2 } from "react-icons/bs";
import { useItems } from "../Context";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

function Mobile() {
  const { setOpenCart, cartItems } = useItems();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="nav-mobile">
      <button  className="shopping-cart">
        {cartItems.length > 0 ? (
          <div className="shopping-cart-amount">{cartItems.length}</div>
        ) : null}
        <BsCart2 style={{ fontSize: "25px", color: "black" }} />
      </button>
      <div onClick={() => setOpenMenu(true)} className="burger-menu">
        <div className="menu-item"></div>
        <div className="menu-item"></div>
        <div className="menu-item"></div>
      </div>
      {openMenu && (
        <div className="nav-mobile-opened-container">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              setOpenMenu(false);
            }}
          >
            <AiOutlineClose />
          </button>
          <div className="links">
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                setOpenMenu(false);
              }}
              to="categories"
            >
              CATEGORIES
            </Link>
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                setOpenMenu(false);
              }}
              to="categories/?type=Lamp"
            >
              LAMPS
            </Link>
            <Link
              onClick={() => setOpenMenu(false)}
              to="categories/?type=Furniture"
            >
              FURNITURE
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mobile;
