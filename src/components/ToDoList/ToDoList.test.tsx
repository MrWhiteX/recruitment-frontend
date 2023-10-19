import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../../store/reducers/tasks";
import ToDoList from "components/ToDoList/ToDoList";
import { Task } from "types/types";

const mockTasks: Task[] = [
  { id: 1, text: "Task 1", completed: false },
  { id: 2, text: "Task 2", completed: true },
  { id: 3, text: "Task 3", completed: false },
];

const mockStore = configureStore({
  preloadedState: {
    tasks: mockTasks,
  },
  reducer: {
    tasks: tasksReducer,
  },
});

describe("<ToDoList />", () => {
  it("renders active and completed tasks correctly", () => {
    const { getByTestId } = render(
      <Provider store={mockStore}>
        <ToDoList />
      </Provider>,
    );

    const activeTasks = getByTestId("active-tasks");
    const completedTasks = getByTestId("completed-tasks");

    expect(activeTasks).toHaveTextContent("2");
    expect(completedTasks).toHaveTextContent("1");
  });
});
