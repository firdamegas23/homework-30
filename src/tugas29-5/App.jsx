import { useState } from "react";

function App() {
    const [username, setUsername] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        alert(`Isi input saat ini: ${username}`);
    }

    return (
        <div>
            <h1>Form Username</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Masukkan Username" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default App