import React from "react";
import { useParams } from "react-router-dom";
import fakeData from "../../fakeData";
import Product from "../product/Product";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { productkey } = useParams();
  const productdetail = fakeData.find((pd) => pd.key === productkey);
  return (
    <div className="product-detail">
      <h2>product details </h2>
      <Product showAddToCart={false} product={productdetail}></Product>
    </div>
  );
};
export default ProductDetail;
