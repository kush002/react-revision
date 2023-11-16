import React, {
  lazy,
  Suspense,
  useEffect,
  useState,
  Provider,
  useContext,
} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Error from "./pages/Error";
import RestaurantMenu from "./pages/RestaurantMenu";
import UserContext from "./utils/UserContext";
// import Grocery from "./pages/Grocery";
const AppLayout = () => {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const data = {
      name: "Kushagra Singh",
    };

    setUserName(data.name);
  }, []);

  // const { loggedInUser } = useContext(UserContext);

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div>
        <Header />

        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

//Chunking , Code Splitting, Lazy Loading, Dynamic Import, Dynamic Bundling, On Demand Loading

const Grocery = lazy(() => {
  return import("./pages/Grocery");
});

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
