import tasksReducer, {
  addTask,
  toggleTask,
  editTask,
  deleteTask,
} from "./tasks";

describe("tasks reducer", () => {
  const mockText = "New Task";

  it("should handle initial state", () => {
    expect(tasksReducer(undefined, {} as any)).toEqual([]);
  });

  it("should handle adding a task", () => {
    const action = addTask(mockText);
    const result = tasksReducer([], action);
    expect(result).toHaveLength(1);
    expect(result[0].text).toEqual(mockText);
  });

  it("should handle toggling a task", () => {
    const initialTask = { id: 1, text: mockText, completed: false };
    const action = toggleTask(initialTask.id);
    const initialState = [initialTask];
    const result = tasksReducer(initialState, action);

    expect(result).toHaveLength(1);
    expect(result[0].completed).toBeTruthy();
  });

  it("should handle editing a task", () => {
    const newText = "Edited Task";
    const initialTask = { id: 1, text: mockText, completed: false };
    const action = editTask({ id: initialTask.id, newText });
    const initialState = [initialTask];
    const result = tasksReducer(initialState, action);

    expect(result).toHaveLength(1);
    expect(result[0].text).toEqual(newText);
  });

  it("should handle deleting a task", () => {
    const initialTask = { id: 1, text: mockText, completed: false };
    const action = deleteTask(initialTask.id);
    const initialState = [initialTask];
    const result = tasksReducer(initialState, action);

    expect(result).toHaveLength(0);
  });
});
