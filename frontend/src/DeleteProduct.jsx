import React from "react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "./Redux/CartItems";

function DeleteProduct({ getId }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteProduct(getId));
  };
  return (
    <>
      <button onClick={handleDelete}> delete </button>
    </>
  );
}

export default DeleteProduct;
