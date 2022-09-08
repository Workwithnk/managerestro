import React, { useContext } from "react";
import { ProductContext } from "../App";
import "../css/comman.css";
import SingleProduct from "../SingleProduct";

function Electronics() {
  let getData = useContext(ProductContext);
  let dataArr = [...getData];
  let filteredData = dataArr.filter((data) => data.category === "electronics");

  return (
    <div className="Electronics comman">
      {filteredData.map((data) => {
        return (
          <div key={data.id} className="CommanContainer">
            {filteredData.length === 0 ? (
              "Loading..."
            ) : (
              <SingleProduct
                title={data.title}
                id={data.id}
                price={data.price}
                description={data.description}
                image={data.image}
                rating={data.rating.rate}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Electronics;
