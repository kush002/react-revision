import { useContext } from "react";
import UserContext from "../utils/UserContext";

const AboutUs = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div>
      <h1>AboutUs</h1>
      <h2>{loggedInUser}</h2>
      <h2>This is food delivery app</h2>
    </div>
  );
};

export default AboutUs;
