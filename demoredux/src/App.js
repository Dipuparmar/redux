import "./App.css";
import IncDec from "./components/IncDec";
import { Provider } from "react-redux";
import store from "./store";
//useSelector work as Consumer
function App() {
  return (
    <>
      <Provider store={store}>
        <IncDec />
      </Provider>
    </>
  );
}

export default App;
