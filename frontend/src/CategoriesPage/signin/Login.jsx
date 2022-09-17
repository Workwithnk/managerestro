import React, { useEffect } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link, useNavigate } from "react-router-dom";
import "../../css/login.css";

function Login({ handleUserDetail }) {
  const navigation = useNavigate();

  const [userDetails, setUserDetails] = React.useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();

    fetch(`${process.env.REACT_APP_BASE_API_URL}/login`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        email: userDetails?.email,
        password: userDetails?.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.message === null) {
          alert("Invalid credentials");
          setUserDetails({});
        } else {
          handleUserDetail(data.message);
          alert(`Welcome back @${data?.message?.name} `);
          data?.message?.isAdmin ? navigation("/") : navigation("/");
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="formCont">
      <form className="mainContLogin" method="POST">
        <div className="commanInpCont__Login">
          <p className="commanInpTitle__Login">Email</p>
          <input
            type="email"
            value={userDetails.email}
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
            alt="email"
            name="email"
            className="input_Login"
          />
        </div>
        <div className="commanInpCont__Login">
          <p className="commanInpTitle__Login">Password</p>
          <input
            type="password"
            value={userDetails?.password}
            onChange={(e) =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
            alt="password"
            name="password"
            className="input_Login"
          />
        </div>
        <button className="loginBtn_Login" onClick={handleLogin}>
          Login
        </button>
        <Link to="/register" className="newUserText__Login">
          new user <ArrowRightAltIcon className="rightArrowzIcon__Login" />
        </Link>
      </form>
    </div>
  );
}

export default Login;
