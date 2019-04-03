import React, { Component } from 'react';

import { Carousel } from '../../components';

import Images from '../../assets/img';

import Box from './Box';

import '../../assets/css/pages/home/home.css';

export default class Home extends Component {
    render = () => {
        return (
            <div className="home">
                <div className='main-carousel'>
                    <Carousel
                        data={[
                            {
                                item: Images.HomeCarouselOsaka,
                                content:
                                    <>
                                        <div className='head'>PLANNING A TRIP<br />TO OSAKA?</div>
                                        <div className='body'>The fool wanders, a wise man travels.<br />- Thomas Fuller -</div>
                                    </>,
                            },
                            {
                                item: Images.HomeCarouselBangkok,
                                content:
                                    <>
                                        <div className='head'>PLANNING A TRIP<br />TO BANGKOK?</div>
                                        <div className='body'>The fool wanders, a wise man travels.<br />- Thomas Fuller -</div>
                                    </>,
                            },
                            {
                                item: Images.HomeCarouselDanang,
                                content:
                                    <>
                                        <div className='head'>PLANNING A TRIP<br />TO DANANG?</div>
                                        <div className='body'>The fool wanders, a wise man travels.<br />- Thomas Fuller -</div>
                                    </>,
                            },
                            {
                                item: Images.HomeCarouselFlorence,
                                content:
                                    <>
                                        <div className='head'>PLANNING A TRIP<br />TO FLORENCE?</div>
                                        <div className='body'>The fool wanders, a wise man travels.<br />- Thomas Fuller -</div>
                                    </>,
                            },
                        ]}
                    />
                </div>

                <div className='wrapper'
                    style={{
                        width: '100%',
                        height: '25rem'
                    }}
                >
                    <Box
                        icon={Images.HomeHelp}
                        content={{
                            head: <p>We make you happy</p>,
                            body: <p>It provides customized travel information for you <br /> and is available free of charge.</p>,
                        }}
                    />
                </div>


                {/* <div className=''>
                    <img src={Images.HomeHelp.path} alt={Images.HomeHelp.name} />
                    <img src={Images.HomeCamera.path} alt={Images.HomeCamera.name} />
                    <img src={Images.HomeHanger.path} alt={Images.HomeHanger.name} />
                    <img src={Images.HomeFood.path} alt={Images.HomeFood.name} />
                </div> */}
            </div>
        );
    }
}