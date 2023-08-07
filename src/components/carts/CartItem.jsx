import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useItems } from "../../Context";

function CartItem({ currentItem, setSubTotal }) {
  const { setCartItems } = useItems();

  const [cartPrice, setCartPrice] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    setSubTotal((oldItems) => {
      const doesItemExist = oldItems.some((item) => item.id === currentItem.id);
      const newItems = oldItems.map((item) =>
        item.id === currentItem.id ? { ...item, cartPrice } : item
      );
      if (doesItemExist) return [...newItems];
      return [...oldItems, { ...currentItem, cartPrice }];
    });
  }, [cartPrice]);

  useEffect(() => {
    setCartQuantity((oldQuantity) => oldQuantity + currentItem.quantity);
    setCartPrice((oldPrice) => oldPrice + currentItem.currentPrice);
  }, [currentItem]);

  function increase() {
    setCartQuantity((oldQuantity) => oldQuantity + 1);
    setCartPrice((oldPrice) => oldPrice + currentItem.price);
  }

  function decrease() {
    if (cartQuantity === 1) return;
    setCartQuantity((oldQuantity) => oldQuantity - 1);
    setCartPrice((oldPrice) => oldPrice - currentItem.price);
  }

  function deleteItem(id) {
    setCartItems((oldItems) => oldItems.filter((item) => item.id !== id));
    setSubTotal((oldItems) => oldItems.filter((item) => item.id !== id));
    setCartQuantity(0);
    setCartPrice(0);
  }

  return (
    <>
      <div className="cart-item-left">
        <img src={currentItem.img} />
      </div>
      <div className="cart-item-mid">
        <h1>{currentItem.description}</h1>
        <div className="calculate-cart-item-price">
          <button onClick={decrease}>-</button>
          <p>{cartQuantity}</p>
          <button onClick={increase}>+</button>
        </div>
      </div>
      <div className="cart-item-right">
        <h2>{cartPrice}.00$</h2>
        <button
          onClick={() => deleteItem(currentItem.id)}
          className="close-cart"
        >
          <AiOutlineClose />
        </button>
      </div>
    </>
  );
}

export default CartItem;
