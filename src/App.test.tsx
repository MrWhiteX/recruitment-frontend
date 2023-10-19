import { render } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "store/store";

describe("<App />", () => {
  it("renders without crashing", () => {
    <Provider store={store}>
      <App />
    </Provider>;
  });

  it("renders all its sub-components", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    expect(getByTestId("welcome")).toBeInTheDocument();
    expect(getByTestId("add-task")).toBeInTheDocument();
    expect(getByTestId("to-do-list")).toBeInTheDocument();
  });
});
