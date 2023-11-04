import { useState } from "react";
import { LOGO_LINK } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [loginButton, setLoginButton] = useState("Login");

  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <img className="res-logo" src={LOGO_LINK} />
      <ul className="res-nav">
        <li>Online Status: {onlineStatus === true ? "🟢" : "🔴"}</li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/grocery">Grocery</Link>
        </li>
        <li>
          <Link>Cart</Link>
        </li>
        <button
          type="button"
          onClick={() => {
            {
              loginButton === "Login"
                ? setLoginButton("Logout")
                : setLoginButton("Login");
            }
          }}
          className="login-btn"
        >
          {loginButton}
        </button>
      </ul>
    </div>
  );
};
export default Header;
