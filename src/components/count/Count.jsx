import {useState} from "react";
import './count.scss'
function Count(){
    const [count,setCount] = useState(0);
    const inc = ()=>{
        setCount(prevState => prevState+1);
    };
    const dec = ()=>{
        setCount(prevState => prevState-1);
    };
    const multiple = ()=>{
        setCount(prevState => prevState*2);
    };
    const divide = ()=>{
        setCount(prevState => prevState/2);
    };
    const reset = ()=>{
        setCount(0);
    };
    return(
        <div className="Count">
            <p>Counter:</p>
            <p>{count}</p>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
            <button onClick={multiple}>x2</button>
            <button onClick={divide}>/2</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default Count;