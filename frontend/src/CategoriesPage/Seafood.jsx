import React, { useContext } from "react";
import { ProductContext } from "../App";
import SingleProduct from "../SingleProduct";
import "../css/comman.css";
import Discount from "../Discount";

function Seafood() {
  const getProduct = useContext(ProductContext);

  let dataArr = [...getProduct];
  let filteredData = dataArr.filter((data) => data.category === "Seafood");

  return (
    <>
      <Discount />

      <div className="clothing comman">
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

export default Seafood;
