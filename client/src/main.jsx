import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux'
import { BrowserRouter} from 'react-router-dom'
import store from './redux/store'
import App from "./App.jsx";
import "./index.css";
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3001';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
