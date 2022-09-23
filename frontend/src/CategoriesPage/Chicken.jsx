import React, { useContext } from "react";
import { ProductContext } from "../App";
import SingleProduct from "../SingleProduct";
import "../css/comman.css";
import Discount from "../Discount";

function Chicken() {
  let getData = useContext(ProductContext);

  let myArr = [...getData];

  let filteredJwelary = myArr.filter((data) => data.category === "Chicken");

  return (
    <>
      <Discount />
      <div className="Electronics comman">
        {filteredJwelary.map((data) => {
          return (
            <div key={data._id} className="CommanContainer">
              {filteredJwelary.length === 0 ? (
                "Loading..."
              ) : (
                <SingleProduct
                  title={data.title}
                  id={data._id}
                  price={data.price}
                  description={data.description}
                  image={data.image}
                />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Chicken;
