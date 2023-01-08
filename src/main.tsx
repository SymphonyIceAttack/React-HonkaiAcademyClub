import React from "react";
import ReactDOM from "react-dom/client";
import "@unocss/reset/normalize.css";
import App from "./App";
import "./index.css";
import "uno.css";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";



ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
