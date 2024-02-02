import { render, screen } from "@testing-library/react";
import Contact from "../Contact"
import "@testing-library/jest-dom";

describe("Contact Page test cases", () => {
    it("Should Load Contact Component", () => {
        render(<Contact/>);
    
        const heading = screen.getByRole("heading");
    
        // Assertion
        expect(heading).toBeInTheDocument();
    });
    
    it("Should Load button inside my Contact Component", () => {
        render(<Contact/>);
    
        const button = screen.getByText("Submit");
    
        // Assertion
        expect(button).toBeInTheDocument();
    });
    
    it("Should Load input name inside my Contact Component", () => {
        render(<Contact/>);
    
        const inputName = screen.getByPlaceholderText("name");
    
        // Assertion
        expect(inputName).toBeInTheDocument();
    });
    
    it("Should Load 2 input boxes inside my Contact Component", () => {
        render(<Contact/>);
    
        const inputBoxes = screen.getAllByRole("textbox");
        // console.log(inputBoxes.length);
    
        // Assertion
        expect(inputBoxes.length).toBe(2);
    });
});