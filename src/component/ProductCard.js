import React from "react";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/Product/${item.id}`);
  };
  return (
    <div className="card" onClick={goDetail}>
      <img src={item?.img} />
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new == true ? "신상" : ""}</div>
    </div>
  );
};

export default ProductCard;
