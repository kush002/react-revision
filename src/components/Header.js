import { useState } from "react";
import { LOGO_LINK } from "../utils/constants";
const Header = () => {
  const [loginButton, setLoginButton] = useState("Login");
  return (
    <div className="header">
      <img className="res-logo" src={LOGO_LINK} />
      <ul className="res-nav">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
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
