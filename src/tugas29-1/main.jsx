import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Product from "./changeProduct";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Product />
    </StrictMode>
);