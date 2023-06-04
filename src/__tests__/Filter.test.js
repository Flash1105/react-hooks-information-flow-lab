import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";

test("displays the <select> element", () => {
  expect(screen.queryByRole("combobox"));
});

test("calls the onCategoryChange callback prop when the <select> is changed", () => {
  const onCategoryChange = jest.fn();

  
  });
  

