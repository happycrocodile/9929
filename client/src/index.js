import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import store from "./app/store";
import { Provider } from "react-redux";
import { SWRConfig } from "swr";

axios.defaults.baseURL = "http://localhost:8000/api";

const fetcher = (...args) => axios.get(...args).then(response => response.data)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <SWRConfig value={{ fetcher: fetcher, suspense: true }}>
            <Provider store={store}>
                <App />
            </Provider>
        </SWRConfig>
    </React.StrictMode>
);

reportWebVitals();
