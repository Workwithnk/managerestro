import React, { useContext } from "react";
import { ProductContext } from "../App";
import SingleProduct from "../SingleProduct";
import "../css/comman.css";

function Jewelery() {
  let getData = useContext(ProductContext);

  let myArr = [...getData];

  let filteredJwelary = myArr.filter((data) => data.category === "jewelery");

  return (
    <div className="Electronics comman">
      {filteredJwelary.map((data) => {
        return (
          <div key={data.id} className="CommanContainer">
            {filteredJwelary.length === 0 ? (
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

export default Jewelery;
