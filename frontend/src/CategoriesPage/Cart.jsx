import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserDetailsContext } from "../App";
import CartBtn from "../CartBtn";
import "../css/comman.css";

function Cart() {
  const user = useContext(UserDetailsContext);

  const navigation = useNavigate();
  let getProducts = useSelector((state) => state.CartItems);

  let cartArr = [...getProducts];

  let finalVal = 0;
  cartArr.map((data) => {
    finalVal += data.price;
  });
  const token = window.localStorage.getItem("userToken");
  const handleCheckout = () => {
    if (token === null || token?.length === 0) {
      alert("please login or register");
      navigation("/login");
    } else if (cartArr?.length === 0) {
      alert(`please add some items @${user?.name}`);
      navigation("/");
    } else {
      window.location.reload(true);
      alert(`Hurray your order is accepted!! Thankyou @${user?.name}`);
    }
  };

  return (
    <div className="Cart">
      <table width="88%">
        <thead>
          <tr>
            <td>Food Id</td>
            <td>Food Image</td>
            <td>Food Name</td>
            <td>Food Price</td>
            <td>Food count</td>
            {/* <td>Delete product</td> */}
          </tr>
        </thead>
        <tbody>
          {cartArr.map((data, index) => {
            return (
              <tr key={index}>
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
              </tr>
            );
          })}
          <tr>
            <td colSpan="4">Total</td>
            <td>{finalVal}$</td>
          </tr>
        </tbody>
      </table>
      <div className="btnCont">
        <button className="btn" onClick={handleCheckout}>
          checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
