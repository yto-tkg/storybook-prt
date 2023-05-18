import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./lib/store";
import InboxScreen from "./components/InboxScreen";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}

export default App;
