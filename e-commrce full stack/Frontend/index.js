import React from "react";
import reactDOM from "react-dom/client";
import App from "./App";
import './index.css';
import ShopContextProvider from "./context/Shopcontext";


const root = reactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </React.StrictMode>
);  
