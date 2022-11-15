import React from "react";
import "./Reviewitem.css";

const Reviewitem = (props) => {
  const { name, quantity } = props.product;
  const reviewStyle = {
    marginLeft: "200px",
    borderBottom: "1px solid lightgrey",
    paddingBottom: "15px",
  };
  return (
    <div style={reviewStyle}>
      <h3>{name}</h3>
      <p className="">Quantity : {quantity}</p>
      <button className="addTocartBtn reviewbtn">Remove</button>
    </div>
  );
};

export default Reviewitem;
