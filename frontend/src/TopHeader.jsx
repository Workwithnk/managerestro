import React from "react";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import { Link, useNavigate } from "react-router-dom";
import "./css/TopHeader.css";
import { useContext } from "react";
import { UserDetailsContext } from "./App";

function TopHeader({ getLoggedUser }) {
  let user = useContext(UserDetailsContext);
  let localStorageData = window.localStorage.getItem("userToken");

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
            <button className="loginBtn">addItem</button>
          </Link>
        )}
        {user?.email?.length > 0 && (
          <Link to="/myaccount">
            <button className="loginBtn">account</button>
          </Link>
        )}
        {localStorageData?.length > 0 ? (
          <button className="loginBtn" onClick={handleLogOut}>
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="loginBtn"> Login</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default TopHeader;
