import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

const categoriesUlStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  marginBottom: "-3px",
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
  const location = useLocation();
  const cartItems = useSelector((state) => state.CartItems);

  return (
    <ul className="categories" style={categoriesUlStyle}>
      <li style={categoriesLiStyle}>
        <NavLink style={categoriesLinkStyle} to="/">
          <p
            style={
              location.pathname === "/"
                ? { borderBottom: "2px solid #000" }
                : { borderBottom: "none" }
            }
          >
            All food
          </p>
        </NavLink>
      </li>
      <li style={categoriesLiStyle}>
        <NavLink style={categoriesLinkStyle} to="/Seafood">
          <p
            style={
              location.pathname === "/Seafood"
                ? { borderBottom: "2px solid #000" }
                : { borderBottom: "none" }
            }
          >
            Seafood
          </p>
        </NavLink>
      </li>
      <li style={categoriesLiStyle}>
        <NavLink style={categoriesLinkStyle} to="/Chicken">
          <p
            style={
              location.pathname === "/Chicken"
                ? { borderBottom: "2px solid #000" }
                : { borderBottom: "none" }
            }
          >
            Chicken
          </p>
        </NavLink>
      </li>
      <li style={categoriesLiStyle}>
        <NavLink style={categoriesLinkStyle} to="/Vegetarian">
          <p
            style={
              location.pathname === "/Vegetarian"
                ? { borderBottom: "2px solid #000" }
                : { borderBottom: "none" }
            }
          >
            Vegetarian
          </p>
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
