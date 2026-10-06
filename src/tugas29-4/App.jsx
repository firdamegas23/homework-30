import { useRef } from "react";

function App() {
    const inputRef = useRef();

    const handleClick = () => {
        alert(inputRef.current.value);
    }

    return (
        <div>
            <h1>Input dengan useRef</h1>

            <input type="text" ref={inputRef} placeholder="Ketik Sesuatu" />
            <button onClick={handleClick}>Tampilkan</button>
        </div>
    );
}

export default App;