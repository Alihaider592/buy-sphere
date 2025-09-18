import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import { ShopContextProvider } from "./components/shopcontaxt";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <ShopContextProvider>
    <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>
  </ShopContextProvider>
);


