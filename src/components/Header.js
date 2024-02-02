import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/comman";
import { useContext, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
// import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);

  // const {loggedInUser} = useContext(UserContext);
  return (
    <div className="flex justify-between shadow-lg">
      <div className="logo-container">
        <img src={LOGO_URL} className="w-40 " alt="" />
      </div>
      <div className="nav-items items-center">
        <ul className="flex p-5 m-5">
          <li className="px-4">
            Online Status : {onlineStatus === true ? "🟢" : "🔴"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>

          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
         
          {/* <li>Cart</li> */}
          <li className="px-4 font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">
            <Link to="/cart" className="relative flex">
              <svg className="flex-1 w-8 h-8 fill-current" >
                <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
              </svg>
              <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                {cartItems.length}
              </span>
            </Link>
          </li>
          <li className="px-4">
            <button
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
              className="bg-black text-white rounded-lg px-3 py-1"
            >
              {btnName}
            </button>
          </li>
          {/* <li className="font-bold px-4">{loggedInUser}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
