import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "types/types";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [] as Task[],
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    toggleTask: (state, action: PayloadAction<number>) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    editTask: (
      state,
      action: PayloadAction<{ id: number; newText: string }>,
    ) => {
      const taskToEdit = state.find((task) => task.id === action.payload.id);
      if (taskToEdit) {
        taskToEdit.text = action.payload.newText;
      }
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, toggleTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
