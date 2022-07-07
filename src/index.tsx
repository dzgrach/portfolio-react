import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import thunkMiddleware from 'redux-thunk'

import CssBaseline from "@mui/material/CssBaseline"
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./i18n";

import reportWebVitals from "./reportWebVitals";

import "./index.scss";

import AppReducer from "./reducers/app.reducer"

import App from "./app";

const store = configureStore({
  reducer: {
    app: AppReducer,
  },
  middleware: [thunkMiddleware]
})

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const theme = createTheme();

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
