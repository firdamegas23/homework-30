import React, { useEffect } from "react";

function withLogger(WrappedComponent) {
    return function WithLogger(props) {
        useEffect(() => {
            console.log("Component has mounted");

            return () => {
                // Saat web di refresh / cleanup
                console.log("Component will unmount");
            }
        }, []);

        return <WrappedComponent {...props} />
    }
}

function MyComponent() {
    return (
        <div>
            <h1>Belajar HOC!</h1>
        </div>
    );
}

export default withLogger(MyComponent);