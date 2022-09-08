import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

const categoriesUlStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  marginBottom: "10px",
};
const categoriesLiStyle = {
  listStyle: "none",
};

const categoriesLinkStyle = {
  textDecoration: "none",
  fontSize: "18px",
  color: " black",
};

const cartIcon = {
  fontSize: "1.5rem",
  cursor: "pointer",
  color: "#000",
};

const countOfCart = {
  position: "absolute",
  backgroundColor: "red",
  padding: "2px 5px",
  borderRadius: "50%",
  fontSize: "10px",
  color: "white",
  top: "-9px",
  right: "-10px",
};

function Categories() {
  const cartItems = useSelector((state) => state.CartItems);

  return (
    <ul className="categories" style={categoriesUlStyle}>
      <li style={categoriesLiStyle}>
        <NavLink style={categoriesLinkStyle} to="/">
          All Product
        </NavLink>
      </li>
      <li style={categoriesLiStyle}>
        <NavLink style={categoriesLinkStyle} to="/clothing">
          Clothings
        </NavLink>
      </li>
      <li style={categoriesLiStyle}>
        <NavLink style={categoriesLinkStyle} to="/jewelery">
          Jewelery
        </NavLink>
      </li>
      <li style={categoriesLiStyle}>
        <NavLink style={categoriesLinkStyle} to="/electronics">
          Electronics
        </NavLink>
      </li>
      <li style={categoriesLiStyle}>
        <div className="cartIconContainer" style={{ position: "relative" }}>
          <NavLink to="cart">
            <AiOutlineShoppingCart style={cartIcon} />
            <span style={countOfCart}>{cartItems.length}</span>
          </NavLink>
        </div>
      </li>
    </ul>
  );
}

export default Categories;
