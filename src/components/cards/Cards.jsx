import './cards.scss';
import seattle from './img/Seattle.jpg';
import austin from './img/Austin.jpg';
import francisco from './img/San_Francisco.jpg';
import {useEffect, useRef, useState} from "react";


function Cards() {
    const [display, setDisplay] = useState(false);
    const [image,setImage ] = useState([]);
    const [disSelect, setSelect] = useState(false);
    const first = useRef(null);
    const second = useRef(null);
    const third = useRef(null);

    const selectItem = (img, text, id, ref) => {
        const selected = image.find((item) => item.id === id);
        if (!selected) {
            ref.current.style.border = '4px solid blue';
            ref.current.style.borderRadius = '5px';
            setImage((prevState) => [
                ...prevState,
                {
                    img: img,
                    text: text,
                    id: id,
                },
            ]);
        } else {
            ref.current.style.border = 'none';
            setImage((prevState) => prevState.filter((item) => item.id !== id));
        }
    };


    const selectrOn = ()=>{
        if(disSelect === false){
            setSelect(true);
                first.current.style.border = '4px solid blue';
                first.current.style.borderRadius = '5px';
                second.current.style.border = '4px solid blue';
                second.current.style.borderRadius = '5px';
                third.current.style.border = '4px solid blue';
                third.current.style.borderRadius = '5px';

                setImage([
                    {
                        img: seattle,
                        text: 'seattle',
                        id: 1,
                    },
                    {
                        img: austin,
                        text: 'Austin',
                        id: 2,
                    },
                    {
                        img: francisco,
                        text: 'San_Francisco',
                        id: 3,
                    }
                ]);
        }
        else{
            setSelect(false);
                first.current.style.border = 'none';
                second.current.style.border = 'none';
                third.current.style.border = 'none';
                setImage([]);
        }
    }

    return (
        <div className="Cards">
            <div className="Cards-in">
                <div className="Cards-title">
                    <h2>Select a travel</h2>
                    <div>
                        <p onClick={() => setDisplay(true)}>Submit</p>
                        <p onClick={()=>{setSelect(true);selectrOn()}}>Select all</p>
                    </div>
                </div>
                <div className="Cards-list">
                    <div className="Card-list-item"
                         ref={first}
                         onClick={() => { selectItem(seattle,"Seattle",1, first) }}>
                        <img src={seattle} alt="seattle" />
                        <p>Seattle</p>
                    </div>
                    <div className="Card-list-item"
                         ref={second}
                         onClick={() => { selectItem(austin,"Austin",2, second) }}>
                        <img src={austin} alt="austin" />
                        <p>Austin</p>
                    </div>
                    <div className="Card-list-item"
                         ref={third}
                         onClick={() => { selectItem(francisco,"San_Francisco",3, third) }}>
                        <img src={francisco} alt="francisco" />
                        <p>San_Francisco</p>
                    </div>
                </div>
                <div className="Cards-modul" style={{display:display?'block':'none'}}>
                    <div className="Cards-modul-in">
                        <div className="Cards-modul-top">
                            <h2>Selected travels</h2>
                            <button onClick={()=>setDisplay(false)}>X</button>
                        </div>
                        <div className="Cards-modul-in-img">
                            {
                                image.map(({ img, text, id }, index) => (
                                    <div className="Card-list-item" key={index}>
                                        <img src={img} alt="" />
                                        <p>{text}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;