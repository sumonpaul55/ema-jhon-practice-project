import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./product.css";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { img, name, seller, price, stock, key } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="product-name">
          <Link to={"/product/" + key}>{name}</Link>
        </h4>
        <br />
        <p>
          <small>by : {seller}</small>
        </p>
        <p>$ {price}</p>
        <p> Only left in stock order soon {stock}</p>

        {props.showAddToCart && (
          <button className="addTocartBtn" onClick={() => props.handleaddproduct(props.product)}>
            <FontAwesomeIcon className="adtoCartBtnicon" icon={faCartShopping} />
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
