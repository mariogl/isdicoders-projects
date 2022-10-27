import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import TimeAgo from "javascript-time-ago";
import es from "javascript-time-ago/locale/es.json";
import { store } from "./redux/store";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import "./index.css";
import { chackraCustomTheme } from "./theme/theme";

TimeAgo.addDefaultLocale(es);

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ChakraProvider theme={chackraCustomTheme}>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
