import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/comman";
import { addToCart } from "../utils/cartSlice";

const ItemList = ({ items }) => {

  const dispatch = useDispatch();

  const handleAddToCart = (items) => {
    dispatch(addToCart(items));
  }
  return (
    <div className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
      <div className="w-9/12">
        <div className="py-2">
          <span className="">{items?.name}</span>
          <span className="">
            {" "}
            - ₹ {items?.price / 100 || items?.defaultPrise / 100}
          </span>
        </div>
        <p className="text-slate-600">{items?.description}</p>
      </div>
      <div className="w-3/12 p-4">
        <div className="absolute">
          <button onClick={() => handleAddToCart(items)} className="bg-black mx-10 text-white shadow-lg rounded-lg px-2 py-1">Add +</button>
        </div>
        <img
          src={`${CDN_URL}${items?.imageId}`}
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};
export default ItemList;
