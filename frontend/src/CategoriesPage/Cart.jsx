import React from "react";
import { useSelector } from "react-redux";
import CartBtn from "../CartBtn";
import "../css/comman.css";
import DeleteProduct from "../DeleteProduct";

function Cart() {
  let getProducts = useSelector((state) => state.CartItems);
  const cartArr = [...getProducts];
  let MyCurrentVal;
  let finalVal = 0;
  cartArr.map((data) => {
    finalVal += data.price;
  });

  return (
    <div className="Cart">
      <table width="90%">
        <thead>
          <tr>
            <td>Product Id</td>
            <td>Product Image</td>
            <td>Product Name</td>
            <td>Product Price</td>
            <td>Product count</td>
            {/* <td>Delete product</td> */}
          </tr>
        </thead>
        <tbody>
          {cartArr.map((data) => {
            return (
              <tr key={data.id}>
                <td>
                  <p>{data.id}</p>
                </td>
                <td>
                  <img src={data.image} alt={data.title} />
                </td>
                <td>
                  <h4>{data.title}</h4>
                </td>
                <td>
                  <p>{data.price}$</p>
                </td>
                <td>
                  <h6
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "20px",
                      justifyContent: "center",
                    }}
                  >
                    <CartBtn id={data.id} count={data.count} />
                  </h6>
                </td>
                {/* <td>
                  <DeleteProduct getId={data.id} />
                </td> */}
              </tr>
            );
          })}
          <tr>
            <td colSpan="4">Total</td>
            <td>{finalVal}$</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
