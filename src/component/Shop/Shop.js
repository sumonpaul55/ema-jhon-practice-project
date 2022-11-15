import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import Product from "../product/Product";
import Cart from "../Cart/Cart";
import "../Shop/Shop.css";
import { addToDatabaseCart } from "../../utilities/databaseManager";
const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [product, setproducts] = useState(first10);
  const [cart, setcart] = useState([]);

  useEffect(() => {
    setproducts(first10);
  }, []);
  const handleaddproduct = (product) => {
    const newCart = [...cart, product];
    setcart(newCart);
    const sameProduct = newCart.filter((pd) => pd.key === product.key);
    const count = sameProduct.length;
    addToDatabaseCart(product.key, count);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {product.map((pd) => (
          <Product key={pd.key} showAddToCart={true} product={pd} handleaddproduct={handleaddproduct}></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
