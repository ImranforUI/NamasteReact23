import { Link } from "react-router-dom";
import { CDN_URL, PRODUCT_URL } from "../utils/comman";

const RestaurantCard = (props) => {
  const { info } = props.resData;

  return (
    <div className="flex">
      <div data-testid="resCard" className="m-4 p-4 w-[250px] rounded-lg bg-gray-200 hover:bg-gray-300 shadow-lg">
        <img
          src={`${CDN_URL}${info?.cloudinaryImageId}`}
          height=""
          alt=""
          className="rounded-lg h-44 w-80"
        />
        <div className="p-2 m-1">
          <div className="font-bold">{info?.name}</div>
          <div
            className="mb-2"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              WebkitLineClamp: 1,
            }}
          >
            {info?.cuisines.join(", ")}
          </div>
          <div className="">{info?.avgRating} stars</div>
          <span className="text-muted small mb-3">{info?.costForTwo}</span>
          <br />
          <span className="text-muted small mb-3">{info?.sla?.slaString}</span>
        </div>
      </div>
    </div>
  );
};

export const withPramotedLable = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-3 p-2 rounded-lg">
          Pramoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
