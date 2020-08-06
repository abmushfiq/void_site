import React from 'react';
import Img from '../images/tab-1-pic.png';
import '../css/TabContent1.css';

export default function TabContentOne() {
    return (
        <div className='tabContentContainer'>
            <div className="container">
                <div className='tab-content'>
                    <div>
                    <span className='pra'>We Are Product Engineering <br/> Specialists </span>
                    <br />
                    <button>Read More</button>
                    </div>
                    <img src ={Img} />
                </div>
            </div>
        </div>
    )
}

/* Main Content */




