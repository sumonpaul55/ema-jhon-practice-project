import React from "react";
import { Link } from "react-router-dom";
import "../Cart/Cart.css";
const Cart = (props) => {
  const cart = props.cart;
  // const Total = cart.reduce((total, prdvalue) => total + prdvalue.price, 0);
  let Total = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    Total += product.price;
  }
  let shipping = 0;
  if (Total > 50 && Total < 100) {
    shipping = 15;
  } else if (Total >= 100) {
    shipping = 10;
  } else if (Total < 50 && Total > 0) {
    shipping = 20;
  }
  let tax = Total * 0.15;
  const grandtotal = Total + shipping + tax;
  const formateNumber = (num) => {
    let precirion = num.toFixed(2);
    precirion = Number(precirion);
    return precirion;
  };
  return (
    <div className="cart-mani">
      <h4>Order summery</h4>
      <hr />
      <p>Items Ordered: {cart.length}</p>
      <p>Product Price : {formateNumber(Total)}</p>
      <p>
        <small>Shipping cost : {formateNumber(shipping)}</small>
      </p>
      <p>
        <small>
          Tax <code>&</code> vat : {formateNumber(tax)}
        </small>
      </p>
      <p>Total Price : {formateNumber(grandtotal)}</p>

      <Link to="/orderReview">
        <button className="addTocartBtn">Review order</button>
      </Link>
    </div>
  );
};

export default Cart;
