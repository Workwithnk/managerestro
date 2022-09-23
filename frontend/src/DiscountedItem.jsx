import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./css/comman.css";
import SingleProduct from "./SingleProduct";

function DiscountedItem() {
  const location = useLocation();
  let perOfDesc = location.pathname.split("").slice(-2).join("");
  const [discountedData, setDiscountedData] = useState([]);
  const handleDescountedItems = async () => {
    let res = await fetch(`/discount/${perOfDesc}`);
    let response = await res.json();
    setDiscountedData(response.data);
  };

  useEffect(() => {
    handleDescountedItems();
  }, []);

  return (
    <div className="comman">
      {discountedData.map((data) => {
        return (
          <div key={data._id} className="CommanContainer">
            {discountedData.length === 0 ? (
              "Loading..."
            ) : (
              <>
                <SingleProduct
                  title={data.title}
                  id={data._id}
                  price={data.price}
                  description={data.description}
                  image={data.image}
                />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default DiscountedItem;
