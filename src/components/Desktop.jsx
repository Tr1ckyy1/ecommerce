import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { useItems } from "../Context";
function Desktop() {
  const { setOpenCart, cartItems } = useItems();

  return (
    <div className="nav-desktop">
      <Link
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
        to="categories"
      >
        categories
      </Link>
      <Link
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
        to="categories?type=Lamp"
      >
        lamps
      </Link>
      <Link
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
        to="categories?type=Furniture"
      >
        furniture
      </Link>
      <button onClick={
        console.log("bla")
      } className="shopping-cart">
        {cartItems.length > 0 ? (
          <div className="shopping-cart-amount">{cartItems.length}</div>
        ) : null}
        <BsCart2 style={{ fontSize: "25px", color: "black" }} />
      </button>
    </div>
  );
}

export default Desktop;
