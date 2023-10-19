import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../../store/reducers/tasks";
import AddTask from "components/AddTask/AddTask";

const mockStore = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

describe("<AddTask />", () => {
  it("renders without crashing", () => {
    render(
      <Provider store={mockStore}>
        <AddTask />
      </Provider>,
    );
  });

  it("displays error when invalid input is given", () => {
    const { getByTestId } = render(
      <Provider store={mockStore}>
        <AddTask />
      </Provider>,
    );

    const inputElement = getByTestId("task-input");
    fireEvent.change(inputElement, { target: { value: "some invalid input" } });
    fireEvent.keyDown(inputElement, { key: "Enter" });

    expect(getByTestId("error-message")).toBeInTheDocument();
  });
});
