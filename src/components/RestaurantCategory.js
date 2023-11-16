import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItem, onClick, index }) => {
  const itemListHandler = () => {
    // console.log(data);
    {
      !showItem ? onClick(index) : onClick(null);
    }
  };

  return (
    <div className=" w-6/12 mx-auto ">
      <div
        key={data.card.card.title}
        className="my-4  bg-gray-100 p-5 shadow-lg"
      >
        <div
          onClick={itemListHandler}
          className="flex justify-between cursor-pointer"
        >
          <span className="font-bold text-lg">
            {data.card.card.title} ({data.card.card.itemCards.length})
          </span>
          <span className="">🔽</span>
        </div>
        {showItem && <ItemList items={data.card.card.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
