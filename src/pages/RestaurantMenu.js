import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "../components/Shimmer";
import RestaurantCategory from "../components/RestaurantCategory";

import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, id, costForTwoMessage } =
    resInfo?.data?.cards[0]?.card?.card?.info;

  const Menu =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  const MenuItem = !Menu.categories
    ? Menu.itemCards
    : Menu.categories[0]?.itemCards;

  const categories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  // const filteredCat = categories.;
  const indexHandler = (change) => {
    setShowIndex(change);
  };

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold tezt-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((cat, index) => (
        <RestaurantCategory
          key={index}
          data={cat}
          index={index}
          showItem={index === showIndex}
          onClick={indexHandler}
        />
      ))}
      <div>
        {/* {MenuItem.map((menu) => {
          return (
            <p key={menu.card.info.id}>{`${menu.card.info.name} - Rs.${
              menu.card.info.price / 100
            }`}</p>
          );
        })} */}
      </div>
    </div>
  );
};

export default RestaurantMenu;
