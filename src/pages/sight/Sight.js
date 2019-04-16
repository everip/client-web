import React, { Component } from 'react';

import { Carousel } from '../../components';

import Images from '../../assets/img';

import '../../assets/css/pages/sight/index.css';

export default class Sight extends Component {
    render = () => {
        return (
            <div className={`page`}>
                <div className={`page-container`}>
                    <div className={`sight-carousel`}>
                        <Carousel
                            remote={false}
                            time={2.5}
                            data={[
                                {
                                    item: Images.HomeCarouselOsaka,
                                    content:
                                        <>
                                            <div className={`body`}>
                                                <span>#도톤보리</span>
                                            </div>
                                        </>,
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>
        );
    }
}