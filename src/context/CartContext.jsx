import {createContext, useContext, useMemo, useState} from 'react';

const CartContext = createContext(null);

export const CartProvider =({children}) => {
    const [items, setItems] = useState([]);

    const addItem = ({ productKey, productName, productImg, cartImg, orderSize, quantity }) => {
    if (!quantity || quantity <= 0) return;

    setItems((prev) => {
      const idx = prev.findIndex(
        (it) => it.productKey === productKey && it.orderSize === orderSize
      );

      // If the same product+size exists, increase quantity
      if (idx !== -1) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], quantity: copy[idx].quantity + quantity };
        return copy;
      }

      // Otherwise add new line item
      return [...prev, { productKey, productName, productImg, cartImg, orderSize, quantity }];
    });
  };

  const removeItem = (productKey, orderSize) => {
    setItems((prev) =>
      prev.filter((it) => !(it.productKey === productKey && it.orderSize === orderSize))
    );
  };

  const clearCart = () => setItems([]);

  const cartCount = useMemo(
    () => items.reduce((sum, it) => sum + (it.quantity ?? 0), 0),
    [items]
  );

  const value = useMemo(
    () => ({ items, addItem, removeItem, clearCart, cartCount }),
    [items, cartCount]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
};

export default CartContext