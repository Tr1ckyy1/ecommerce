// import { useEffect, useState } from "react";
import { useState } from "react";
import { useItems } from "../../Context";
import CartItem from "./CartItem";

function FilledCart() {
  const { cartItems } = useItems();
  const [subTotal, setSubTotal] = useState([]);

  const summed = subTotal.reduce((acc, cur) => acc + cur.cartPrice, 0);

  return (
    <div className="filled-cart-container">
      {cartItems.map((item) => (
        <div className="cart-items-container" key={item.id}>
          <CartItem
            subTotal={subTotal}
            setSubTotal={setSubTotal}
            currentItem={item}
          />
        </div>
      ))}
      <div className="subtotal">
        <h1>Subtotal</h1>
        <div className="subtotal-amount">
          <h1>{summed}$</h1>
          <button>Go to Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default FilledCart;
