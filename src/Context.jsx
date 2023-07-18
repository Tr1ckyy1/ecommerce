import { createContext, useContext, useState, useEffect } from "react";
import { items } from "./AllData";

const ItemsContext = createContext();

function ItemsProvider({ children }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [openCart, setOpenCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState();
  const [currentPrice, setCurrentPrice] = useState();
  const [toast, setToast] = useState(false);

  function addItem(currentItem) {
    setCartItems((oldItems) => {
      const doesItemExist = oldItems.some((item) => item.id === currentItem.id);
      // Provide updated quantity and currentPrice added inside of an object (in both cases, if item is the same or different (new one))
      const newItems = oldItems.map((item) =>
        item.id === currentItem.id ? { ...item, quantity, currentPrice } : item
      );

      if (doesItemExist) return [...newItems];
      return [...oldItems, { ...currentItem, quantity, currentPrice }];
    });
    setToast(true);
    setTimeout(() => {
      setToast(false);
    }, 2500);
  }

  useEffect(() => {
    function watchWidth() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", watchWidth);

    return function () {
      window.removeEventListener("resize", watchWidth);
    };
  }, []);

  return (
    <ItemsContext.Provider
      value={{
        items,
        windowWidth,
        openCart,
        setOpenCart,
        cartItems,
        setCartItems,
        addItem,
        quantity,
        setQuantity,
        currentPrice,
        setCurrentPrice,
        toast,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}

function useItems() {
  const context = useContext(ItemsContext);
  if (context === undefined)
    throw new Error("ItemsContext was used outside the ItemsProvider");
  return context;
}

export { ItemsProvider, useItems };
