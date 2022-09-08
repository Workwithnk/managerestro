import React, { useContext } from "react";
import { ProductContext } from "../App";
import SingleProduct from "../SingleProduct";
import "../css/comman.css";

function AllData() {
  let getAllData = useContext(ProductContext);

  return (
    <div className="AllData comman">
      {getAllData.map((data) => {
        return (
          <div key={data.id} className="CommanContainer">
            {getAllData.length === 0 ? (
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

export default AllData;
