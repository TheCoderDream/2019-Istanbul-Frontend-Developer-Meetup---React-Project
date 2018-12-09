import React, {Component} from 'react';
import Slide from 'react-reveal/Slide';

import './CountDown.css';

const CountDownItem = (
    {
        time,
        text
    }
) => {
    return (
        <div className="countdown_item">
            <div className="countdown_time">
                {time}
            </div>
            <div className="countdown_tag">
                {text}
            </div>
        </div>
    );
};



class CountDown extends Component {

    state = {
        startTime: 'Jan, 1, 2019',
        days: '0',
        hours: '0',
        minutes: '0',
        seconds:'0',
        intervalId: 0
    };

    componentDidMount() {
        this.setState({
            intervalId: setInterval(() => this.getTimeUntil(this.state.startTime), 1000)
        });
    }

    componentWillUnmount(){
        clearTimeout(this.state.intervalId);
    }

    getTimeUntil(lastTime) {
        const time = Date.parse(lastTime) - Date.parse(new Date());

        if(time > 0) {
            const seconds = Math.floor((time/1000) % 60);
            const minutes = Math.floor((time/1000/60)%60);
            const hours = Math.floor((time/(1000*60*60))%24);
            const days = Math.floor((time/(1000*60*60*24)));

            this.setState({
                seconds,
                minutes,
                hours,
                days
            })
        }
    }



    render() {

        const {seconds,
            minutes,
            hours,
            days} = this.state;

        return (
            <Slide left delay={1000}>
                <div className="countdown_container">
                    <div className="countdown_top">
                        Event Starts in
                    </div>
                    <div className="countdown_bottom">
                        <CountDownItem time={days} text={'Days'}/>
                        <CountDownItem time={hours} text={'Hs'}/>
                        <CountDownItem time={minutes} text={'Ms'}/>
                        <CountDownItem time={seconds} text={'Sec'}/>
                    </div>
                </div>
            </Slide>
        );
    }
}

export default CountDown;