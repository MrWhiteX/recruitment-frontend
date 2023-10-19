import { Middleware, MiddlewareAPI, Dispatch, AnyAction } from "redux";

const localStorageMiddleware: Middleware =
  (store: MiddlewareAPI) =>
  (next: Dispatch<AnyAction>) =>
  (action: AnyAction) => {
    const result = next(action);

    localStorage.setItem("tasks", JSON.stringify(store.getState().tasks));

    return result;
  };

export default localStorageMiddleware;
