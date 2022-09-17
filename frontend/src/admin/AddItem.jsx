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
  });

  const handleAddItem = (e) => {
    e.preventDefault();

    axios(`${process.env.REACT_APP_BASE_API_URL}/additem`, {
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
            className="input_Login"
          >
            <option value="Seafood">Seafood</option>
            <option value="Chicken">Chicken</option>
            <option value="Vegetarian">Vegetarian</option>
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
