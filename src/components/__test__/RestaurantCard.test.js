import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import { withPramotedLable } from "../RestaurantCard";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resCardMock.json"; 

it("should render Restaurant component with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA}/>)

    const name = screen.getByText("Domino's Pizza");

    expect(name).toBeInTheDocument();
});

// it("should render restaurant card component with pramoted label", () => {   
//     render(<withPramotedLable/>)
// })