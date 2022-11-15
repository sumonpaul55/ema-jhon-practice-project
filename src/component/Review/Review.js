import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import { getDatabaseCart } from "../../utilities/databaseManager";
import Reviewitem from "../Reviewitem/Reviewitem";

const Review = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productkey = Object.keys(savedCart);
    const cartProducts = productkey.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedCart[key];
      return product;
    });
    setCart(cartProducts);
  }, []);
  return (
    <div>
      <h1>Selected items: {cart.length}</h1>
      {cart.map((pd) => (
        <Reviewitem product={pd} key={pd.key}></Reviewitem>
      ))}
    </div>
  );
};

export default Review;
