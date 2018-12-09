import React from 'react';
import Slider from 'react-slick';

import slide_one from '../../assets/img/1.jpg';
import slide_two from '../../assets/img/2.jpg';
import slide_three from '../../assets/img/3.png';

import 'Carousel.css';

const Carousel = () => {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500
    };

    return (
        <div
            className={'carousel_container'}
            style={{
                height: `${window.innerHeight}px`,
                overflow: 'hidden'
            }}
        >
            <Slider {...settings}>
                <div>
                    <div
                    style={{
                        background: `url(${slide_one})`,
                        height: `${window.innerHeight}px`
                    }}
                    className={'carousel_img '}>
                    </div>
                </div>
                <div>
                    <div
                        style={{
                            background: `url(${slide_two})`,
                            height: `${window.innerHeight}px`
                        }}
                        className={'carousel_img '}>
                    </div>
                </div>
                <div>
                    <div
                        style={{
                            background: `url(${slide_three})`,
                            height: `${window.innerHeight}px`
                        }}
                        className={'carousel_img '}>
                    </div>
                </div>
            </Slider>

        </div>
    );
};

export default Carousel;