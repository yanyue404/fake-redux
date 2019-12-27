import React from "react";
import { hot } from "react-hot-loader/root";
import Header from "./components/Header";
import Content from "./components/Content";
import { Provider, createStore } from "./utils";
import { Action } from "./types";
interface Props {
  name: string;
}

const themeReducer = (state: any, action: Action) => {
  if (!state)
    return {
      themeColor: "red"
    };
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, themeColor: action.payload.themeColor };
    default:
      return state;
  }
};

const store = createStore(themeReducer);

class App extends React.Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <Content />
      </Provider>
    );
  }
}
export default hot(App);
