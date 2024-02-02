import { useState, useEffect } from "react";
import { MENU_API } from "./comman";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    try {
      const data =
        await fetch(`${MENU_API}${resId}`);
      if (!data.ok) {
        throw new Error(`HTTP error! Status: ${data.status}`);
      }
      const json = await data.json();
      setResInfo(json.data);
    } catch (error) {
      // console.error("Fetch error:", error);
    }
  };
  return resInfo;
};
export default useRestaurantMenu;


