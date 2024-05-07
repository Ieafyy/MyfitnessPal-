import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="853166764076-r71st2imdabo57tsc6b5rbr06qn3bej4.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
