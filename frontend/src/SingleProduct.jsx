import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setId } from "./Redux/SelectedProduct";
import "./css/SingleData.css";

function SingleProduct({ id, title, price, description, image, rating }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const handleSingleProduct = () => {
    setProduct({ id, title, price, description, image, rating });
    navigate(`/product/${id}`);
    dispatch(setId(id));
  };

  return (
    <div className="SingleData" onClick={handleSingleProduct}>
      <img src={image} alt={title} className="image__singleData" />
      <div className="description__singleData">
        <h3>{title}</h3>
        <p>{price}$</p>
      </div>
    </div>
  );
}

export default SingleProduct;
