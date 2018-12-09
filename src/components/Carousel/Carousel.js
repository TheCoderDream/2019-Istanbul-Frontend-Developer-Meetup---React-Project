import React, {Component} from 'react';
import Slider from 'react-slick';

import slide_one from '../../assets/img/1.jpg';
import slide_two from '../../assets/img/2.jpg';
import slide_three from '../../assets/img/3.png';

import './Carousel.css';

class Carousel extends Component {

    state = {
        settings : {
            dots: false,
            infinite: true,
            autoplay: true,
            speed: 10
        },
        bgHeight: window.innerHeight
    };

    updateBgSize = (e) => {
      this.setState({
          bgHeight: window.innerHeight
      })
    };

    componentWillMount() {
        window.addEventListener('resize', this.updateBgSize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateBgSize);
    }



    render() {
        const {settings, bgHeight} = this.state;

        return (
            <div
                className={'carousel_container'}
                style={{
                    height: `${bgHeight}px`,
                    overflow: 'hidden'
                }}
            >
                <Slider {...settings}>
                    <div>
                        <div
                            style={{
                                background: `url(${slide_one})`,
                                height: `${bgHeight}px`
                            }}
                            className={'carousel_img'}>
                        </div>
                    </div>
                    <div>
                        <div
                            style={{
                                background: `url(${slide_two})`,
                                height: `${bgHeight}px`
                            }}
                            className={'carousel_img'}>
                        </div>
                    </div>
                    <div>
                        <div
                            style={{
                                background: `url(${slide_three})`,
                                height: `${bgHeight}px`
                            }}
                            className={'carousel_img'}>
                        </div>
                    </div>
                </Slider>

            </div>
        );
    }
};

export default Carousel;