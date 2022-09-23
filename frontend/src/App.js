import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Categories from "./Categories";
import { Route, Routes } from "react-router-dom";
import AllData from "./CategoriesPage/AllData";
import Cart from "./CategoriesPage/Cart";
import ProductDetails from "./ProductDetails";
import { Provider } from "react-redux";
import store from "./Redux/store";
import LoadingPage from "./LoadingPage";
import Login from "./CategoriesPage/signin/Login";
import Register from "./CategoriesPage/signin/Register";
import TopHeader from "./TopHeader";
import Vegetarian from "./CategoriesPage/Vegetarian";
import Seafood from "./CategoriesPage/Seafood";
import Chicken from "./CategoriesPage/Chicken";
import AddItem from "./admin/AddItem";
import Account from "./Account";
import "./App.css";
import PageNotFound from "./PageNotFound";
import Discount from "./Discount";
import DiscountedItem from "./DiscountedItem";

export const ProductContext = createContext();
export const UserDetailsContext = createContext();
function App() {
  const [data, setData] = useState([]);
  const [loggedUser, setLoggedUser] = useState({});
  const [currLoggedUser, setCurrLoggedUser] = useState({});
  const handleUserDetail = (details) => {
    setLoggedUser(details);
  };

  const handleFoodData = async () => {
    const res = await fetch("/additem");
    const result = await res.json();
    setData(result.foodData);
  };
  const getLoggedUser = async () => {
    const res = await fetch("/loggeduser", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("userToken"),
      }),
    });
    const result = await res.json();
    setCurrLoggedUser(result.loggedUser);
  };
  const token = window.localStorage.getItem("userToken");

  useEffect(() => {
    Object.keys(loggedUser).length > 0 &&
      window.localStorage.setItem("userToken", loggedUser.token);
    getLoggedUser();
  }, [loggedUser]);

  useEffect(() => {
    handleFoodData();
  }, []);

  return (
    <BrowserRouter>
      <ProductContext.Provider value={data}>
        <UserDetailsContext.Provider value={currLoggedUser}>
          <Provider store={store}>
            <div className="App">
              <div
                className="App__header"
                style={{
                  position: "sticky",
                  top: "0px",
                  background: "#fff",
                  width: "100%",
                  borderBottom: "1px solid rgba(0,0,0,0.2)",
                }}
              >
                <TopHeader getLoggedUser={getLoggedUser} />
                <Categories />
              </div>

              <>
                {data.length === 0 ? (
                  <LoadingPage />
                ) : (
                  <Routes>
                    <Route exact path="/" element={<AllData />} />
                    <Route exact path="/Seafood" element={<Seafood />} />
                    <Route exact path="/Chicken" element={<Chicken />} />
                    <Route exact path="/Vegetarian" element={<Vegetarian />} />
                    <Route exact path="/cart" element={<Cart />} />
                    <Route
                      exact
                      path="/product/:id"
                      element={<ProductDetails />}
                    />
                    {(token?.length === 0 || token === null) && (
                      <>
                        <Route
                          exact
                          path="/register"
                          element={
                            <Register handleUserDetail={handleUserDetail} />
                          }
                        />
                        <Route
                          exact
                          path="/login"
                          element={
                            <Login handleUserDetail={handleUserDetail} />
                          }
                        />
                      </>
                    )}
                    {window.localStorage.getItem("userToken") !== null && (
                      <>
                        <Route exact path="/myaccount" element={<Account />} />
                        <Route exact path="/addItem" element={<AddItem />} />
                      </>
                    )}
                    <Route path="/discount/:id" element={<DiscountedItem />} />
                    <Route path="*" element={<PageNotFound />} />
                  </Routes>
                )}
              </>
            </div>
          </Provider>
        </UserDetailsContext.Provider>
      </ProductContext.Provider>
    </BrowserRouter>
  );
}

export default App;
