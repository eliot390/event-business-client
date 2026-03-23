import {createContext, useContext, useEffect, useMemo, useState} from 'react';

const CartContext = createContext(null);

const CART_STORAGE_KEY = "cart-contents";

export const CartProvider =({children}) => {
    const [items, setItems] = useState(() => {
      const saved = localStorage.getItem(CART_STORAGE_KEY)
      return saved ? JSON.parse(saved) : []
    });

    const addItem = ({ productKey, productName, productImg, cartImg, orderSize, orderCost, quantity }) => {
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
      return [...prev, { productKey, productName, productImg, cartImg, orderSize, orderCost, quantity }];
    });
  };

  const removeItem = (productKey, orderSize) => {
    setItems((prev) =>
      prev.filter((it) => !(it.productKey === productKey && it.orderSize === orderSize))
    );
  };

  const incrementItem = (productKey, orderSize) => {
  setItems((prev) =>
    prev.map((it) =>
      it.productKey === productKey && it.orderSize === orderSize
        ? { ...it, quantity: it.quantity + 1 }
        : it
    )
  );
};

const decrementItem = (productKey, orderSize) => {
  setItems((prev) =>
    prev.map((it) =>
        it.productKey === productKey && it.orderSize === orderSize
          ? { ...it, quantity: Math.max(1, it.quantity - 1) }
          : it
      )
  );
};

  const clearCart = () => setItems([]);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const cartCount = useMemo(
    () => items.reduce((sum, it) => sum + (it.quantity ?? 0), 0),
    [items]
  );

  const cartTotal = useMemo(
    () => items.reduce((sum, it) => sum + it.quantity * (it.orderCost ?? 0), 0), 
    [items]
  );

  const value = useMemo(
    () => ({ items, addItem, removeItem, clearCart, cartCount, cartTotal, incrementItem, decrementItem }),
    [items, cartCount, cartTotal]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
};

export default CartContext