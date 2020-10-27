import React, { useRef, useState } from 'react';

const StopCounter = () => {
    const [count, setCount] = useState(0);

    // 因為 functional component 沒有 this 可用
    // 所以可用 useRef 來取代 instance variable (this.ref)
    const ref = useRef({});

    const stopCounter = () => {
        clearInterval(ref.current)
    };
    const startCounter = () => {
        stopCounter();
        ref.current = setInterval(() => setCount(c => c + 1), 500)
    };

    return (
        <div>
            <h1>StopCounter: { count }</h1>
            <button onClick={startCounter}>start</button>
            <button onClick={stopCounter}>stop</button>
        </div>
    );
}

export default StopCounter;
