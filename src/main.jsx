import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import MenusProvider from "./contexts/MenusProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <MenusProvider>
        <App />
      </MenusProvider>
    </BrowserRouter>
  </StrictMode>,
);
