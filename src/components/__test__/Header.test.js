import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import '@testing-library/jest-dom';

it("should load header componet and cart item count", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", {name: "Logout"});
  expect(logoutButton).toBeInTheDocument();
});
