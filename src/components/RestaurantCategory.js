import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  console.log("Data", data);
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="w-6/12 bg-gray-50 shadow-lg p-4 m-auto my-4">
      <div
        onClick={handleClick}
        className="flex justify-between cursor-pointer"
      >
        <span className="font-bold">
          {data?.title} ({data?.itemCards?.length})
        </span>
        <span>🔽</span>
      </div>
      <div>
        {data?.itemCards?.map(
          (item) =>
            showItems && (
              <ItemList key={item?.card?.info.id} items={item?.card?.info} />
            )
        )}
      </div>
    </div>
  );
};
export default RestaurantCategory;
