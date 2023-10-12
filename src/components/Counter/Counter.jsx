import "./counter.scss";
import React, {useRef, useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [interval, setIntervalId] = useState(null);
    const ref = useRef(null)
    const startInterval = (item) => {
        const id = setInterval(() => {
            if (item === "inc") {
                setCount((prevState) => prevState + 1);
                    ref.current.style.color = 'green'
            } else if (item === "dec") {
                setCount((prevState) => prevState - 1);
                    ref.current.style.color = 'red'
            }
        }, 50);

        setIntervalId(id);
    };

    const stopInterval = () => {
        if (interval) {
            ref.current.style.color = 'black'
            clearInterval(interval);
            setIntervalId(null);
        }
    };

    return (
        <div className="Counter">
            <button onMouseDown={() => startInterval("inc")} onMouseUp={stopInterval}>
                +
            </button>
            <h1 ref={ref}>{count}</h1>
            <button onMouseDown={() => startInterval("dec")} onMouseUp={stopInterval}>
                -
            </button>
        </div>
    );
}

export default Counter;
