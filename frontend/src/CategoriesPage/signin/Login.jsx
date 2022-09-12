import React, { useEffect } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";
import "../../css/login.css";

function Login() {
  const [userDetails, setUserDetails] = React.useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        email: userDetails?.email,
        password: userDetails?.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data === null) {
          alert("User not found Signin please");
        } else {
          alert(`Welcome back @${data.message.name} `);
        }
      })
      .catch((e) => console.log(e));
  };

  return (
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
  );
}

export default Login;
