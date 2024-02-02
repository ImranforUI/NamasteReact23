import RestaurantCard, { withPramotedLable } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
// import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchItem, setSearchItem] = useState("");
  // const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const RestaurantCardPramoted = withPramotedLable(RestaurantCard);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTINGts"
    );
    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-gray-50">
      <div className="">
        <div className="flex items-center m-4">
          <div className="">
            <input
              onChange={(e) => {
                setSearchItem(e.target.value);
              }}
              type="text"
              data-testid="searchInput"
              value={searchItem}
              className="border border-black rounded-lg"
            />
            <button
              onClick={() => {
                let searchFilterItems = listOfRestaurant.filter((item) => {
                  return item.info.name
                    .toLowerCase()
                    .includes(searchItem.toLowerCase());
                });
                setFilteredRestaurant(searchFilterItems);
              }}
              className="bg-green-200 px-3 ml-2  rounded-lg"
            >
              Search
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                const clothes = listOfRestaurant.filter(
                  (item) => item.info?.avgRating >= 4.5
                );

                setFilteredRestaurant(clothes);
              }}
              className="bg-black text-white px-3 py-1 ml-4 rounded-lg"
            >
              Top Rated Restaurants
            </button>
          </div>
          {/* <div className="ml-2">
            <label>User Name: </label>
            <input
              onChange={(e) => setUserName(e.target.value)}
              value={loggedInUser}
              type="text"
              className="p-1 border border-black rounded-lg"
            />
          </div> */}
        </div>
        <div className="flex flex-wrap justify-evenly">
          {/* Restro Card */}
          {filteredRestaurant.map((restaurant, index) => {
            return (
              <Link
                to={`/restaurants/${restaurant.info.id}`}
                key={restaurant.info.id}
                className="my-3"
              >
                <div className="">
                  {restaurant.info?.avgRating > 4.5 === true ? (
                    <RestaurantCardPramoted resData={restaurant} />
                  ) : (
                    <RestaurantCard resData={restaurant} />
                  )}
                  {/* <RestaurantCard resData={restaurant} /> */}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
