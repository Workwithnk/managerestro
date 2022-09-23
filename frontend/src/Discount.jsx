import React from "react";
import disc10 from "./images/discount10.png";
import disc20 from "./images/disc20.png";
import disc50 from "./images/disc50.png";
import disc80 from "./images/disc80.png";
import disc60 from "./images/discount60.png";
import { useNavigate } from "react-router-dom";
import "../src/css/discount.css";

function Discount() {
  const navigate = useNavigate();
  return (
    <div className="discountCont">
      <div className="discount">
        <div
          className="firstCard comman__disc"
          onClick={() => navigate("/discount/10")}
        >
          <img className="image__discount" src={disc10} alt="discount image" />
        </div>
        <div
          className="firstCard comman__disc"
          onClick={() => navigate("/discount/20")}
        >
          <img className="image__discount" src={disc20} alt="discount image" />
        </div>
        <div
          className="firstCard comman__disc"
          onClick={() => navigate("/discount/50")}
        >
          <img className="image__discount" src={disc50} alt="discount image" />
        </div>
        <div
          className="firstCard comman__disc"
          onClick={() => navigate("/discount/60")}
        >
          <img className="image__discount" src={disc60} alt="discount image" />
        </div>

        <div
          className="secondCard comman__disc"
          onClick={() => navigate("/discount/80")}
        >
          <img className="image__discount" src={disc80} alt="discount image" />
        </div>
      </div>
    </div>
  );
}

export default Discount;
