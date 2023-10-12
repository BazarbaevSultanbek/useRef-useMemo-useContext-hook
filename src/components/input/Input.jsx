import "./input.scss"
import {useMemo, useState} from "react";
function Input(){
    const [text,setText] = useState('');
    const [display,setDisplay] = useState(true);
    const takeValue = (event)=>{
        setText(event.target.value);
    }
    const shower = ()=>{
        setDisplay(true)
    }
    const hider = ()=>{
        setDisplay(false)
    }

    return(
        <div className="Input">
           <div className="Input-in">
               <div className="Input-flex">
                   <button onClick={shower}>Show</button>
                   <button onClick={hider}>Hide</button>
               </div>
               <p>An input field!</p>
               <input type="text"
                      onChange={(event)=>takeValue(event)}
                      value={text}
                      style={{display:!display? 'none':'block'}}
               />
           </div>
        </div>
    )
}

export default Input;