import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MyComponent from "./App.jsx"
import "../App.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <MyComponent />
    </StrictMode>
);
