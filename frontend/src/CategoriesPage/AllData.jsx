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
          <div key={data._id} className="CommanContainer">
            {getAllData.length === 0 ? (
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
  );
}

export default AllData;
