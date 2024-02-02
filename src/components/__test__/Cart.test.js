import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMenu.json";
import RestaurantCategory from "../RestaurantCategory";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            Promise.resolve(MOCK_DATA);
        }
    });
});

it("Should load ResCards and get the number of items added to cart", async () => {
    await act(async () => {
        render(
            <>
            <RestaurantMenu />
            {/* <RestaurantCategory/> */}
            </>
        );
    });

    const accordianHeader = screen.getByText("Combos X Puneri Paltan");
    
    //  Will Do Later ...
});
