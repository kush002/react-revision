import { CDN_LINK } from "../utils/constants";
const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between py-4 border-b-2"
        >
          <div className="text-left w-9/12 ">
            <p className="font-semibold">{item.card.info.name}</p>
            <p className="text-sm pb-4">₹{item.card.info.defaultPrice / 100}</p>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4 relative ">
            <div className="absolute m-auto left-0 right-0 top-0 bottom-0">
              <button className="bg-black text-white px-3 py-1 rounded-md  shadow-lg ">
                Add+
              </button>
            </div>

            <img
              className=" rounded-md "
              src={CDN_LINK + item.card.info.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
