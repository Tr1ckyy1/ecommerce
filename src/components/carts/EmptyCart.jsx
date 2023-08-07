import { useItems } from "../../Context";
import EmptyCartImg from "../../images/cart/empty-cart.png";
function EmptyCart() {
  const { setOpenCart } = useItems();
  return (
    <div className="empty-cart">
      <img src={EmptyCartImg} />
      <h2>Your cart is empty</h2>
      <button onClick={() => setOpenCart(false)}>Keep Browsing</button>
    </div>
  );
}

export default EmptyCart;
