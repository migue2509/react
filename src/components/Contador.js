import React, { useEffect, useState } from "react";

const Contador = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Count has been updated: ${count}`);
    }, [count]);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default Contador
