import React from "react";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "70vh",
      }}
    >
      <RestaurantMenuIcon
        style={{
          fontSize: "4rem",
          marginBottom: "20px",
        }}
      />
      <p style={{ fontSize: "20px", marginBottom: "10px" }}>Page not found</p>
      <Link to="/" style={{ color: "#000" }}>
        visit home page
      </Link>
    </div>
  );
}

export default PageNotFound;
