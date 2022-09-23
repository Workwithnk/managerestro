import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { UserDetailsContext } from "../App";
import axios from "axios";
import "../css/login.css";
import "../css/Admin.css";

function AddItem() {
  const userContext = useContext(UserDetailsContext);

  const [itemDetails, setItemDetails] = useState({
    category: "Vegetarian",
    image: "",
    description: "",
    price: 0,
    title: "",
    email: userContext?.email,
    discount: 0,
  });

  const handleAddItem = (e) => {
    e.preventDefault();

    axios("/additem", {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
        Accept: "application/json",
      },
      data: JSON.stringify({
        category: itemDetails.category,
        image: itemDetails.image,
        description: itemDetails.description,
        price: itemDetails.price,
        title: itemDetails.title,
        email: itemDetails.email,
        discount: itemDetails.discount,
      }),
    })
      .then((res) => res.json)
      .then((data) => {
        alert(`Thankyou @${userContext?.name} for adding new food item!! 😋`);
        setItemDetails({
          category: "Vegetarian",
          image: "",
          description: "",
          price: 0,
          title: "",
          email: userContext.email,
        });
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="Admin">
      <form className="mainContLogin">
        <div className="commanInpCont__Login">
          <p className="commanInpTitle__Login">Title</p>
          <input
            type="text"
            value={itemDetails.title}
            onChange={(e) =>
              setItemDetails({ ...itemDetails, title: e.target.value })
            }
            alt="title"
            name="title"
            placeholder="chicken masala"
            className="input_Login"
          />
        </div>
        <div className="commanInpCont__Login">
          <p className="commanInpTitle__Login">ImageURL</p>
          <input
            type="text"
            value={itemDetails.image}
            onChange={(e) =>
              setItemDetails({ ...itemDetails, image: e.target.value })
            }
            alt="image"
            name="image"
            placeholder="https://images..."
            className="input_Login"
          />
        </div>
        <div className="commanInpCont__Login">
          <p className="commanInpTitle__Login">Price</p>
          <input
            type="number"
            value={itemDetails.price}
            onChange={(e) =>
              setItemDetails({ ...itemDetails, price: e.target.value })
            }
            alt="price"
            name="price"
            placeholder="200$"
            className="input_Login"
          />
        </div>
        <div className="commanInpCont__Login">
          <p className="commanInpTitle__Login">Categories</p>
          <select
            value={itemDetails.category}
            onChange={(e) =>
              setItemDetails({ ...itemDetails, category: e.target.value })
            }
            placeholder="Chicken"
            className="input_Login"
          >
            <option value="Seafood">Seafood</option>
            <option value="Chicken">Chicken</option>
            <option value="Vegetarian">Vegetarian</option>
          </select>
        </div>
        <div className="commanInpCont__Login">
          <p className="commanInpTitle__Login">Discount</p>
          <select
            value={itemDetails.discount}
            onChange={(e) =>
              setItemDetails({ ...itemDetails, discount: e.target.value })
            }
            className="input_Login"
          >
            <option value="0">0 %</option>
            <option value="10">10 %</option>
            <option value="20">20 %</option>
            <option value="50">50 %</option>
            <option value="60">60 %</option>
            <option value="80">80 %</option>
          </select>
        </div>
        <div className="commanInpCont__Login">
          <p className="commanInpTitle__Login">Description</p>
          <textarea
            type="text"
            value={itemDetails.description}
            onChange={(e) =>
              setItemDetails({ ...itemDetails, description: e.target.value })
            }
            alt="description"
            name="description"
            placeholder="A flavourful and easy chicken recipe, perfect for occasions like dinner..."
            className="input_Login"
          />
        </div>
        <button className="loginBtn_Login" onClick={handleAddItem}>
          Add Item
        </button>
      </form>
    </div>
  );
}

export default AddItem;
