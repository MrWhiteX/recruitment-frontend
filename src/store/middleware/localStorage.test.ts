import { configureStore, AnyAction } from "@reduxjs/toolkit";
import localStorageMiddleware from "./localStorage";

describe("localStorage middleware", () => {
  let store: any;
  const mockReducer = (state = { tasks: [] }, action: AnyAction) => state;

  let setItemSpy: jest.SpyInstance;

  beforeEach(() => {
    setItemSpy = jest.spyOn(window.localStorage.__proto__, "setItem");

    store = configureStore({
      reducer: mockReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(localStorageMiddleware),
    });
    localStorage.clear();
  });

  afterAll(() => {
    setItemSpy.mockRestore();
  });

  it("should save tasks to localStorage", () => {
    store.dispatch({ type: "ANY_ACTION" });
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "tasks",
      JSON.stringify([]),
    );
  });
});
