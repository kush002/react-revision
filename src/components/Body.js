import { useState, useEffect, useContext } from "react";
import RestaurantCard, { TopRated } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import resObj from "../utils/mockData";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfResturant, setListOfRestaurant] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);

  const [search, setSearch] = useState("");

  const RestaurantCardTop = TopRated(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const { setUserName, loggedInUser } = useContext(UserContext);
  return (
    <div className="res-body">
      <div className="flex my-10">
        <div className="flex mr-10 ">
          <input
            className="border border-black mx-4 rounded-md"
            type="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></input>
          <button
            className="mx-1 bg-blue-400 px-4 rounded-md font-semibold shadow-md"
            type="button"
            onClick={() => {
              const filteredList = listOfResturant.filter((res) =>
                res.info.name.toLowerCase().includes(search.toLowerCase())
              );
              setFilteredResList(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="mx-10 bg-gray-400 px-4 rounded-md font-semibold shadow-md"
          onClick={() => {
            const filteredList = listOfResturant.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredResList(filteredList);
          }}
        >
          Top Rated Producted
        </button>
        <div>
          <label>UserName: </label>
          <input
            className="border border-black"
            type="text"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap">
        {listOfResturant.length === 0 ? (
          <Shimmer />
        ) : (
          filteredResList.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={`restaurants/${restaurant.info.id}`}
            >
              {restaurant.info.avgRating > 4 ? (
                <RestaurantCardTop resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
