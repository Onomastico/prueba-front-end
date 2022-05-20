import { Provider } from "react-redux";
import store from "./store";
import Home from './components/home';

import './App.scss';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home></Home>
      </div>
    </Provider>
  );
}

export default App;
