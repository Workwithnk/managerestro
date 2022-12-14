import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductContext } from "./App";
import { addToCart } from "./Redux/CartItems";
import "./css/comman.css";

function ProductDetails() {
  const dispatch = useDispatch();
  const [disable, setDisable] = useState(false);
  const data = useSelector((state) => state.CartItems);

  const getProduct = useContext(ProductContext);
  const { id } = useSelector((state) => state.SelectedProduct);

  const filteredProduct = [...getProduct].filter((data) => data._id === id);

  const handleClick = (id, title, image, price) => {
    dispatch(
      addToCart({
        id,
        title,
        image,
        price,
        count: 1,
      })
    );
    setDisable(true);
  };

  return (
    <div className="ProductDetails">
      {filteredProduct.map((data) => {
        return (
          <div
            key={data._id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <div className="ProductDetails__image">
              <img src={data.image} alt={data.title} />
            </div>
            <div className="ProductDetails__details">
              <h2>{data.title}</h2>

              <h5 style={{ marginTop: "2%" }}>{data.price}$</h5>
              <p>{data.category}</p>
              <p>{data.description}</p>
              <button
                disabled={disable}
                style={
                  disable
                    ? { backgroundColor: "#4cd137", cursor: "none" }
                    : { backgroundColor: "#44bd32", cursor: "pointer" }
                }
                onClick={() =>
                  handleClick(data._id, data.title, data.image, data.price)
                }
              >
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductDetails;
