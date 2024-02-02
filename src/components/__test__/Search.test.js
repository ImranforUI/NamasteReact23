import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../mocks/resCardList.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Search reslist for burger text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeClick = screen.getAllByTestId("resCard");

  expect(cardsBeforeClick.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "burger" } });

  fireEvent.click(searchBtn);

  const cardsAfterClick = screen.getAllByTestId("resCard");
  // screen should load 2 Restro cards

  expect(cardsAfterClick.length).toBe(2);
});

it("Should render Top rated resCards", async () => {
 await act( async() => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });


  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(20);

  const topRatedBtn = screen.getByRole("button", {name : "Top Rated Restaurants"});

  fireEvent.click(topRatedBtn);
  const filterCards = screen.getAllByTestId("resCard");

  expect(filterCards.length).toBe(3)
});
