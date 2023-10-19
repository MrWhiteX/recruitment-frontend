import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CustomInput from "./CustomInput";

describe("CustomInput component", () => {
  it("renders input correctly", () => {
    render(<CustomInput placeholder="Enter text..." />);
    expect(screen.getByPlaceholderText("Enter text...")).toBeInTheDocument();
  });

  it("handles change events", () => {
    const handleChange = jest.fn();
    render(<CustomInput onChange={handleChange} />);
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "test" },
    });
    expect(handleChange).toHaveBeenCalledWith("test");
  });

  it("handles keydown events", () => {
    const handleKeyDown = jest.fn();
    render(<CustomInput onKeyDown={handleKeyDown} />);
    fireEvent.keyDown(screen.getByRole("textbox"), {
      key: "Enter",
      code: "Enter",
    });
    expect(handleKeyDown).toHaveBeenCalled();
  });

  it("renders button and handles button click", () => {
    const buttonAction = jest.fn();
    render(<CustomInput buttonAction={buttonAction} buttonText="Submit" />);
    userEvent.click(screen.getByText("Submit"));
    expect(buttonAction).toHaveBeenCalled();
  });
});
