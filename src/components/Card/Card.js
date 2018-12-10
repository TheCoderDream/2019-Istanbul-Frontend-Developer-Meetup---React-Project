import React from 'react';

import './Card.css';

const Card = (
    {
        title,
        desc,
        icon
    }
) => {
    return (
        <div className={'card'}>
            <div className="card_outer">
                <div className="card_inner">
                    <div className="card_icon_square bg_yellow"></div>
                    <div
                        style={{
                            background: `url(${icon})`
                        }}
                        className="card_icon"
                    ></div>
                    <div className="card_title">
                        {title}
                    </div>
                    <div className="card_desc">
                        {desc}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Card;