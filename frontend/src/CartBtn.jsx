import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decCount,
  incCount,
  removeablePrice,
  totalPrice,
} from "./Redux/CartItems";

function CartBtn({ id, count }) {
  let dispatch = useDispatch();
  let [disable, setDisable] = useState(true);
  const handleAddCount = (id, count) => {
    dispatch(incCount({ id, count }));
    setDisable(false);
    dispatch(totalPrice({ id, count }));
  };

  let getPrize = useSelector((state) => state.CartItems);
  const handleremoveCount = (id, count) => {
    if (count <= 2) {
      setDisable(true);
    }
    dispatch(removeablePrice({ id, count }));
    dispatch(decCount({ id, count }));
  };
  return (
    <>
      <button onClick={() => handleAddCount(id, count)}>+</button>
      {count}
      <button disabled={disable} onClick={() => handleremoveCount(id, count)}>
        -
      </button>
    </>
  );
}

export default CartBtn;
