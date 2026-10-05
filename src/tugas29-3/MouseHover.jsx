import { useState } from "react";

function MouseHover({ render }) {
    const [position, setPosition] = useState("Tidak Hover");

    const handleMouseEnter = () => {
        setPosition("Hover");
    }

    const handleMouseLeave = () => {
        setPosition("Tidak Hover");
    }

    return (
        <div className="hover-box" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {render(position)}
        </div>
    );
}

export default MouseHover