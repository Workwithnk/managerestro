import React from "react";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./css/TopHeader.css";
import { useContext } from "react";
import { UserDetailsContext } from "./App";

function TopHeader({ getLoggedUser }) {
  let user = useContext(UserDetailsContext);
  let localStorageData = window.localStorage.getItem("userToken");
  const location = useLocation();
  const naviget = useNavigate();
  const handleLogOut = () => {
    window.localStorage.removeItem("userToken");
    getLoggedUser();
    naviget("/");
  };

  return (
    <div className="TopHeader">
      <Link to="/" className="headingCont__topHeader">
        <RestaurantMenuIcon className="logo__topHeader" />
        <h3>Urban Serve</h3>
      </Link>
      <div className="navLinks">
        {user?.isAdmin === true && (
          <Link to="/addItem">
            <button
              className="loginBtn"
              style={
                location.pathname === "/addItem"
                  ? { color: "#fff", background: "#1abc9c" }
                  : { color: "#000", background: "#efefef" }
              }
            >
              addItem
            </button>
          </Link>
        )}
        {user?.email?.length > 0 && (
          <Link to="/myaccount">
            <button
              className="loginBtn"
              style={
                location.pathname === "/myaccount"
                  ? { color: "#fff", background: "#1abc9c" }
                  : { color: "#000", background: "#efefef" }
              }
            >
              account
            </button>
          </Link>
        )}
        {localStorageData?.length > 0 ? (
          <button className="loginBtn" onClick={handleLogOut}>
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button
              className="loginBtn"
              style={
                location.pathname === "/login"
                  ? { color: "#fff", background: "#1abc9c" }
                  : { color: "#000", background: "#efefef" }
              }
            >
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default TopHeader;
