import './toggler.scss'
import {useRef, useState} from "react";

function Toggler() {
    const [rotate, setRotate] = useState(false);
    const first = useRef(null);
    const second = useRef(null);
    const third = useRef(null);
    const appearWithRotate = () => {
        if (rotate) {
            setRotate(false);
            setTimeout(()=>{first.current.style.animation = 'firstBack 2s';first.current.style.top = '-500px'},3000);
            setTimeout(()=>{second.current.style.animation = 'secondBack 2s';second.current.style.right = '-500px'},1500);
            setTimeout(()=>{third.current.style.animation = 'thirdBack 2s';third.current.style.left = '-500px'},1000);
        } else {
            setRotate(true);
            setTimeout(()=>{first.current.style.animation = 'first 2s';first.current.style.top = '35px'},1000);
            setTimeout(()=>{second.current.style.animation = 'second 2s'; second.current.style.right = '120px'},1700);
            setTimeout(()=>{third.current.style.animation = 'third 2s'; third.current.style.left = '190px'},3000);
        }
    }
    return (
        <div className="Toggler" >
            <div className="Toggler-modul">
                <div ref={first} className="Toggler-first"></div>
                <div ref={second} className="Toggler-second"></div>
                <div ref={third} className="Toggler-third"></div>
                <button onClick={appearWithRotate}>Toggle</button>
            </div>
        </div>
    )
}

export default Toggler;