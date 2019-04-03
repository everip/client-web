import React, { Component } from 'react';

import { Carousel } from '../../components';

import Images from '../../assets/img';

import Box from './Box';
import Wrapper from './Wrapper';

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

                <Wrapper
                    box={
                        <Box
                            icon={Images.HomeHelp}
                            content={{
                                head: <p>We make you happy</p>,
                                body: <p>It provides customized travel information for you <br /> and is available free of charge.</p>,
                            }}
                        />
                    }
                />

                <Wrapper
                    set='right'
                    left={Images.HomeCarouselBangkok}
                    right={Images.HomeCarouselDanang}
                    box={
                        <Box
                            icon={Images.HomeCamera}
                            content={{
                                head: <p>We make you happy</p>,
                                body: <p>It provides customized travel information for you <br /> and is available free of charge.</p>,
                            }}
                        />
                    }
                />

                <Wrapper
                    set='left'
                    left={Images.HomeCarouselBangkok}
                    right={Images.HomeCarouselDanang}
                    box={
                        <Box
                            icon={Images.HomeHanger}
                            content={{
                                head: <p>We make you happy</p>,
                                body: <p>It provides customized travel information for you <br /> and is available free of charge.</p>,
                            }}
                        />
                    }
                />

                <Wrapper
                    set='center'
                    left={Images.HomeCarouselBangkok}
                    right={Images.HomeCarouselDanang}
                    center={Images.HomeCarouselOsaka}
                    box={
                        <Box
                            icon={Images.HomeFood}
                            content={{
                                head: <p>We make you happy</p>,
                                body: <p>It provides customized travel information for you <br /> and is available free of charge.</p>,
                            }}
                        />
                    }
                />

                <Wrapper
                    box={
                        <Box
                            icon={Images.HomeHelp}
                            content={{
                                head: <p>We make you happy</p>,
                                body: <p>It provides customized travel information for you <br /> and is available free of charge.</p>,
                            }}
                        />
                    }
                />
            </div>
        );
    }
}