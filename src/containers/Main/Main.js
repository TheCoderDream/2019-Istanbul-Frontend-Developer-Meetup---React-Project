import React from 'react';
import Carousel from "../../components/Carousel/Carousel";

import './Main.css'
import CountDown from "../../components/CountDown/CountDown";

const Main = () => {
    return (
        <div style={{position: 'relative'}}>
            <Carousel/>
            <div className="heading_wrapper">
                <div className="heading_text">
                    We love FrontEnd
                </div>
            </div>

            <CountDown/>
        </div>
    );
};

export default Main;