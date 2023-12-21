import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./AuthProvider/AuthContext.jsx";
import { ToggleProvider } from "./ToggleProvider/ToggleContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ToggleProvider>
          <App />
        </ToggleProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
