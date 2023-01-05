import "./App.css";
import Todo from "./components/Todo";
import { Provider } from "react-redux";
import store from "./app/store";


function App() {
  return (
    <Provider store={store}>
    <div className="app">
      <Todo />
    </div>
    </Provider>
  );
}

export default App;
