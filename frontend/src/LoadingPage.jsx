import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

function LoadingPage() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
      }}
    >
      <ScaleLoader />
    </div>
  );
}

export default LoadingPage;
