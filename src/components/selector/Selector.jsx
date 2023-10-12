import {useState} from "react";
import './selecter.scss'
function Selector(){
    const [selected,setSelect] = useState('');
    const [display,setDisplay] = useState(false);
    const open = ()=>{
        if(display){
            setDisplay(false);
        }else{
            setDisplay(true);
        }
    }

    return(
        <div className="Selector">
            <div className="Selector-in">
                <h3>Selected:{selected}</h3>
                <button onClick={open}>Open Menu</button>
                <ul className="Selector-list" style={{display:display?'block':'none'}}>
                    <li onClick={()=>{setSelect('Bacon');setDisplay(false)}}>Bacon</li>
                    <li onClick={()=>{setSelect('Tuna');setDisplay(false)}}>Tuna</li>
                    <li onClick={()=>{setSelect('Tuna pants');setDisplay(false)}}>Tuna pants</li>
                </ul>
            </div>
        </div>
    )
}

export default Selector;