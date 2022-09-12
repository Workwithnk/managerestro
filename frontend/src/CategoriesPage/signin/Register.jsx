import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../css/login.css";

function Register() {
  const [userDetails, setUserDetails] = React.useState({
    name: "",
    password: "",
    email: "",
    phone: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();
    const { name, password, email, phone } = userDetails;
    axios({
      method: "POST",
      url: "http://localhost:5000/register",
      data: {
        name,
        password,
        email,
        phone,
      },
    })
      .then((res) => {
        if (res.status === 201) {
          alert("User is created 🚀");
        } else {
          alert("User is already registered!!");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <form className="mainContLogin" method="POST">
      <div className="commanInpCont__Login">
        <p className="commanInpTitle__Login">Name</p>
        <input
          type="text"
          value={userDetails.name}
          onChange={(e) =>
            setUserDetails({ ...userDetails, name: e.target.value })
          }
          alt="username"
          name="username"
          className="input_Login"
        />
      </div>
      <div className="commanInpCont__Login">
        <p className="commanInpTitle__Login">Password</p>
        <input
          type="password"
          value={userDetails.password}
          onChange={(e) =>
            setUserDetails({ ...userDetails, password: e.target.value })
          }
          alt="password"
          name="password"
          className="input_Login"
        />
      </div>
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
        <p className="commanInpTitle__Login">Phone</p>
        <input
          type="text"
          value={userDetails.phone}
          onChange={(e) =>
            setUserDetails({ ...userDetails, phone: e.target.value })
          }
          alt="phone"
          name="phone"
          className="input_Login"
        />
      </div>
      <button className="loginBtn_Login" onClick={handleRegister}>
        Register
      </button>
      <Link to="/" className="newUserText__Login">
        already an user <ArrowRightAltIcon className="rightArrowzIcon__Login" />
      </Link>
    </form>
  );
}

export default Register;