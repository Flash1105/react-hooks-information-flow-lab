import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";

test("displays the toggle button", () => {
  expect(screen.queryByText(/ Mode/));
});

test("calls the onDarkModeClick callback prop when the button is clicked", () => {
  const onDarkModeClick = jest.fn();

});
