import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import Categories from "./Categories";
import { Route, Routes } from "react-router-dom";
import AllData from "./CategoriesPage/AllData";
import Clothing from "./CategoriesPage/Clothing";
import Jewelery from "./CategoriesPage/Jewelery";
import Electronics from "./CategoriesPage/Electronics";
import "./App.css";
import Cart from "./CategoriesPage/Cart";
import ProductDetails from "./ProductDetails";
import { Provider } from "react-redux";
import store from "./Redux/store";
import LoadingPage from "./LoadingPage";
import SignIn from "./CategoriesPage/signin/SingIn";

const h2Style = {
  textAlign: "center",
  margin: "10px 0px",
};

const productListStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
};

export const ProductContext = createContext();

const isUserLockedIn = false;

function App() {
  const [data, setData] = useState([]);
  const fetchFackData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  };

  useEffect(() => {
    fetchFackData();
  }, []);
  return (
    <BrowserRouter>
      {isUserLockedIn ? (
        <ProductContext.Provider value={data}>
          <Provider store={store}>
            <div className="App">
              <div
                className="App__header"
                style={{
                  position: "fixed",
                  top: "0px",
                  background: "#fff",
                  width: "100%",
                  borderBottom: "1px solid rgba(0,0,0,0.2)",
                }}
              >
                <h2 style={h2Style}>Products</h2>

                <Categories />
              </div>
              <>
                {data.length === 0 ? (
                  <LoadingPage />
                ) : (
                  <Routes>
                    <Route path="/" element={<AllData />} />
                    <Route path="/clothing" element={<Clothing />} />
                    <Route path="/jewelery" element={<Jewelery />} />
                    <Route path="/electronics" element={<Electronics />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                  </Routes>
                )}
              </>
            </div>
          </Provider>
        </ProductContext.Provider>
      ) : (
        <SignIn />
      )}
    </BrowserRouter>
  );
}

export default App;
