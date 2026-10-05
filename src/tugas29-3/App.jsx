import MouseHover from "./MouseHover";

function App() {
    return (
        <div>
            <h1>Render Props</h1>

            <MouseHover 
                render={(position) => (
                    <h2>Position: {position}</h2>
                )}
            />
        </div>
    );
}

export default App