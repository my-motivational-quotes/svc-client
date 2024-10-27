// tests/QuoteButton.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import QuoteButton from "../QuoteButton";
import "@testing-library/jest-dom";

describe("QuoteButton Component", () => {
  test("renders the button with the correct text", () => {
    render(<QuoteButton onClick={() => {}} />);

    // Check if the button text is correct
    const buttonElement = screen.getByRole("button", {
      name: /Get Motivational Quote/i,
    });
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls onClick function when button is clicked", () => {
    // Mock function for onClick
    const onClickMock = jest.fn();

    render(<QuoteButton onClick={onClickMock} />);

    // Find the button and simulate a click
    const buttonElement = screen.getByRole("button", {
      name: /Get Motivational Quote/i,
    });
    fireEvent.click(buttonElement);

    // Check if onClick was called
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
