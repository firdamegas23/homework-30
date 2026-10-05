import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Product from "./changeProduct";
import '../App.css';

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Product />
    </StrictMode>
);
