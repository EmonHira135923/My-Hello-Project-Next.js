"use client";
import React, { useState } from "react";
import { CartProviders } from "./Provider";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addtoCart = (item) => {
    setCart((prevCart) => [item, ...prevCart]);
  };

  const CartInfo = {
    cart,
    addtoCart,
  };

  return <CartProviders value={CartInfo}>{children}</CartProviders>;
};

export default CartProvider;
