import { useItems } from "../../Context";
import EmptyCart from "./EmptyCart";
import FilledCart from "./FilledCart";
import "./Carts.css";
import { AiOutlineClose } from "react-icons/ai";

function ShowCart() {
  const { openCart, cartItems, setOpenCart } = useItems();
  const length = cartItems.length === 1 ? "item" : "items";
  return (
    <div className={`cart-container  ${openCart ? "opened" : "closed"}`}>
      <div className="cart-header">
        <h1>
          Your Shopping Cart ({cartItems.length} {length})
        </h1>
        <button onClick={() => setOpenCart(false)} className="close-cart">
          <AiOutlineClose />
        </button>
      </div>

      {cartItems.length > 0 ? <FilledCart /> : <EmptyCart />}
    </div>
  );
}

export default ShowCart;
