import React, { useContext } from "react";
import { UserDetailsContext } from "./App";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "./css/AccountDetails.css";
import "./css/comman.css";

function Account() {
  const user = useContext(UserDetailsContext);
  const [showPass, setShowPass] = React.useState(false);
  return (
    <div className="Account">
      <div className="mainContAccount">
        <div className="commanInpCont__Account">
          <p className="commanInpTitle__Account">Name :</p>
          <p className="commanInpTitle__Account">Email :</p>
          <p className="commanInpTitle__Account">Password :</p>
          <p className="commanInpTitle__Account">Phone :</p>
        </div>
        <div className="commanInpCont__Account">
          <p className="commanInpTitle__Account">{user.name}</p>
          <p className="commanInpTitle__Account">{user.email}</p>
          <div className="passCont__Account">
            <input
              type={showPass ? "text" : "password"}
              className="commanInpTitle__Account"
              value={user.password}
            />
            {showPass ? (
              <RemoveRedEyeIcon
                className="eyeIcon"
                onClick={() => setShowPass(!showPass)}
              />
            ) : (
              <VisibilityOffIcon
                className="eyeIcon"
                onClick={() => setShowPass(!showPass)}
              />
            )}
          </div>
          <p className="commanInpTitle__Account">{user.phone}</p>
        </div>
      </div>
    </div>
  );
}

export default Account;
