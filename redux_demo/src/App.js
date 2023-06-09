import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import React from "react";
import CakeContainer from "./components/CakeContainer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
