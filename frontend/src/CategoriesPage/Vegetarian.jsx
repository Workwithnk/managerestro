import React, { useContext } from "react";
import { ProductContext } from "../App";
import "../css/comman.css";
import Discount from "../Discount";
import SingleProduct from "../SingleProduct";

function Vegetarian() {
  let getData = useContext(ProductContext);
  let dataArr = [...getData];
  let filteredData = dataArr.filter((data) => data.category === "Vegetarian");

  return (
    <>
      <Discount />

      <div className="Electronics comman">
        {filteredData.map((data) => {
          return (
            <div key={data._id} className="CommanContainer">
              {filteredData.length === 0 ? (
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

export default Vegetarian;
