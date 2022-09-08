import React, { useContext } from "react";
import { ProductContext } from "../App";
import SingleProduct from "../SingleProduct";
import "../css/comman.css";

function Clothing() {
  const getProduct = useContext(ProductContext);

  let dataArr = [...getProduct];
  let filteredData = dataArr.filter(
    (data) =>
      data.category === "men's clothing" || data.category === "women's clothing"
  );

  // console.log("clothdata", filteredData);
  return (
    <div className="clothing comman">
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

export default Clothing;
