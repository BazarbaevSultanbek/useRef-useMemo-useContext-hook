import './check.scss'
import {useEffect, useState} from "react";

function Check() {
    const [count,setCount] = useState(0);
    const [text,setText] = useState( [
        {
            id: 0,
            text: 'In process'
        },
        {
            id: 1,
            text: 'In process'
        },
        {
            id: 2,
            text: 'In process'
        }])

    const changeText = (id) => {
        const findText = text.find(item=>item.id === id);
        findText.text = 'Delivered';
    }
    const inc = ()=>{
        if(count<3){
            setCount(prevState => prevState+1);
            changeText(count)
        }
    }
    return (
        <div className="Check">
            <div className="Check-modul">
                <div className="Check-modul-map">
                    {
                        text.map(item => (
                            <p key={item.id}>{item.text}</p>
                        ))
                    }
                </div>
                <button onClick={inc}>Special button</button>
            </div>

        </div>
    )
}

export default Check;