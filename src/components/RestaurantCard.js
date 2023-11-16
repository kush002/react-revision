import { CDN_LINK } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } =
    resData?.info;

  return (
    <div className="w-[250px] bg-gray-300 p-4 m-4 rounded-lg">
      <img
        className="rounded-lg w-[232px] h-40"
        alt="res=logo"
        src={`${CDN_LINK}${cloudinaryImageId}`}
      />
      <h3 className="font-bold my-2">{name}</h3>
      <h4 className="font-semibold my-2">{cuisines.slice(0, 3).join(", ")}</h4>
      <h4 className="font-semibold my-2"> {avgRating}</h4>
      <h4 className="font-semibold my-2">{costForTwo}</h4>
      <h4 className="font-semibold my-2">{sla.slaString}</h4>
    </div>
  );

  // Higher order function
};

export const TopRated = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-gray-800 text-white px-2 my-4 mx-8 rounded-lg font-semibold">
          YumYum
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
