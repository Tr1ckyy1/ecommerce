import { createContext, useContext, useState, useEffect } from "react";
import { items } from "./AllData";

const ItemsContext = createContext();

function ItemsProvider({ children }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
    <ItemsContext.Provider value={{ items, windowWidth }}>
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
