import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HeaderMenu from "./headerMenu";
import '../App.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <HeaderMenu />
    </StrictMode>
);