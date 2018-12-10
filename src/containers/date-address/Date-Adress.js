import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Card from "../../components/Card/Card";

import i_c from '../../assets/icons/calendar.png';
import i_l from '../../assets/icons/location.png';

const DateAddress = () => {
    return (

        <div className={'bg_black'}>
            <div className={'container'}>
                <div className="card_wrapper">
                    <Zoom duration={500}>
                        <Card
                            icon={i_c}
                            desc={'1 Jun 2019 00:00'}
                            title={'Event Date & Time'}/>
                    </Zoom>
                    <Zoom>
                        <Card
                            icon={i_l}
                            desc={'Istanbul Turkey'}
                            title={'Event Location'}/>
                    </Zoom>
                </div>
            </div>
        </div>
    );
};

export default DateAddress;