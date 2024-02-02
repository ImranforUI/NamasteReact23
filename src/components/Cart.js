import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/comman";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  }  
  return (
    <div className="text-center p-4 m-4">
      <h3 className="font-bold text-2xl">Cart</h3>
      <button onClick={handleClearCart} className="bg-black text-white p-2 m-2 rounded-lg">
        Clear Cart
      </button>
      {cartItems.length === 0 && (
        <h2 className="font-bold">Your cart is empty</h2>
      )}
      {/* <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
      </div> */}
      {cartItems?.map((items) => {
        return(
        <div className="p-2 w-6/12 m-auto border-gray-200 border-b-2 text-left flex justify-between">
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
            {/* <div className="absolute">
              <button
                //   onClick={() => handleAddToCart(items)}
                className="bg-black mx-10 text-white shadow-lg rounded-lg px-2 py-1"
              >
                Add +
              </button>
            </div> */}
            <img
                src={`${CDN_URL}${items?.imageId}`}
                className="w-full rounded-lg shadow-lg"
              />
          </div>
        </div>
        )
      })}
    </div>
  );
};

export default Cart;
