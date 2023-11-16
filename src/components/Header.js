import { useState, useContext } from "react";
import { LOGO_LINK } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = () => {
  const [loginButton, setLoginButton] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="flex justify-between bg-green-200 shadow-2xl">
      <img className="w-52 h-32" src={LOGO_LINK} />
      <ul className="flex items-center px-4 mx-4">
        <li className="px-4">
          Online Status: {onlineStatus === true ? "🟢" : "🔴"}
        </li>
        <li className="px-4">
          <Link to="/">Home</Link>
        </li>
        <li className="px-4">
          <Link to="/about">About Us</Link>
        </li>
        <li className="px-4">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="px-4">
          <Link to="/grocery">Grocery</Link>
        </li>
        <li className="px-4">
          <Link>Cart</Link>
        </li>
        <button
          className="px-4 bg-blue-400 shadow-md rounded-md py-1 font-semibold mx-2"
          type="button"
          onClick={() => {
            {
              loginButton === "Login"
                ? setLoginButton("Logout")
                : setLoginButton("Login");
            }
          }}
        >
          {loginButton}
        </button>
        <li>{loggedInUser}</li>
      </ul>
    </div>
  );
};
export default Header;
