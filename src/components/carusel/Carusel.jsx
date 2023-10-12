import './carusel.scss'
import fir from './img/1.png';
import sec from './img/2.png';
import thi from './img/3.png';
import four from './img/4.png';
import five from './img/5.png';
import six from './img/6.png';
import sev from './img/7.png';
import eht from './img/8.png';
import nine from './img/9.png';
import ten from './img/10.png';
import el from './img/11.png';
import tw from './img/12.png';
import {useEffect,  useRef, useState} from "react";

function Carusel() {
    const list = useRef(null);
    const topList = useRef(null);
    const [top,setTop] = useState(0)
    const scrollList = () => {
        if (list.current && topList.current) {
            const max = list.current.scrollHeight - list.current.clientHeight;
            const topPosition = (list.current.scrollTop / max) * -375;
            topList.current.style.top = `${topPosition}px`;
        }
    };


    useEffect(() => {
        if (list.current) {
            list.current.onscroll = scrollList;
        }

        return () => {
            if (list.current) {
                list.current.onscroll = null;
            }
        };
    }, []);

    return (
        <div className='Carusel'>
            <div className="Carusel-in">
                {/*<p>{top}</p>*/}
                <div className="Carusel-top">
                    <p>Hello</p>
                    <div className="Carusel-top-list">
                        <ul ref={topList} style={{top:top}}>
                            <li><img src={fir} alt=""/></li>
                            <li><img src={sec} alt=""/></li>
                            <li><img src={thi} alt=""/></li>
                            <li><img src={four} alt=""/></li>
                            <li><img src={five} alt=""/></li>
                            <li><img src={six} alt=""/></li>
                            <li><img src={sev} alt=""/></li>
                            <li><img src={eht} alt=""/></li>
                            <li><img src={nine} alt=""/></li>
                            <li><img src={ten} alt=""/></li>
                            <li><img src={el} alt=""/></li>
                            <li><img src={tw} alt=""/></li>
                        </ul>
                    </div>
                    <p>comes in</p>
                </div>
                <div className="Carusel-scroll" ref={list}>
                    <div className="Carusel-scroll-item"><img src={fir} alt=""/></div>
                    <div className="Carusel-scroll-item"><img src={sec} alt=""/></div>
                    <div className="Carusel-scroll-item"><img src={thi} alt=""/></div>
                    <div className="Carusel-scroll-item"><img src={four} alt=""/></div>
                    <div className="Carusel-scroll-item"><img src={five} alt=""/></div>
                    <div className="Carusel-scroll-item"><img src={six} alt=""/></div>
                    <div className="Carusel-scroll-item"><img src={sev} alt=""/></div>
                    <div className="Carusel-scroll-item"><img src={eht} alt=""/></div>
                    <div className="Carusel-scroll-item"><img src={nine} alt=""/></div>
                    <div className="Carusel-scroll-item"><img src={ten} alt=""/></div>
                    <div className="Carusel-scroll-item"><img src={el} alt=""/></div>
                    <div className="Carusel-scroll-item"><img src={tw} alt=""/></div>
                </div>
            </div>
        </div>
    )
}

export default Carusel;