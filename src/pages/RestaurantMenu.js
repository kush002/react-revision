import { useParams } from "react-router-dom";
import Shimmer from "../components/Shimmer";

import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
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
  console.log(resId);

  console.log(MenuItem);
  return (
    <div>
      <h1>{name}</h1>
      <p>{cuisines}</p>
      <p>{costForTwoMessage}</p>
      <h3>Menu</h3>
      <div>
        {MenuItem.map((menu) => {
          return (
            <p key={menu.card.info.id}>{`${menu.card.info.name} - Rs.${
              menu.card.info.price / 100
            }`}</p>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
