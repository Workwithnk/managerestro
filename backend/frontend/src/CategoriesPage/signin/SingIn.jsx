import React from "react";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import { Route, Routes } from "react-router-dom";
import "../../css/login.css";
import "../../css/SignIn.css";
import Login from "./Login";
import Register from "./Register";

function SingIn() {
  return (
    <div className="SignIn">
      <div className="logoCont__Login">
        <RestaurantMenuIcon className="logo_Login" />
        <p className="heading_Login">Welcome to Urban Serve</p>
      </div>
      <div className="container__SignIn">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default SingIn;
