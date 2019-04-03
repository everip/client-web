import React, { Component } from 'react';

import '../assets/css/components/carousel.css';

export default class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: props.data,
            current: 0,
            size: props.data.length
        }
    }

    handleLeft = () => {
        this.handleMove(this.state.current - 1);
    }

    handleRight = () => {
        this.handleMove(this.state.current + 1);
    }

    handleMove = (value) => {
        const { size } = this.state;
        this.setState({
            current: value < 0
                ? size + value
                : value % size
        })
    }

    render = () => {
        const {
            data,
            current,
        } = this.state;

        const {
            item,
            content
        } = data.find((datum, index) => index === current);

        return (
            <div className='carousel-container'>
                <div className='carousel'>
                    <div className='carousel-items'>
                        <div
                            className={`carousel-item`}
                            style={{
                                backgroundImage: `url(${item.path})`
                            }}
                        />
                    </div>
                    <div className='carousel-contents'>
                        <div
                            className={`carousel-content`}
                        >
                            {content}
                        </div>
                    </div>
                    <div className='carousel-control carousel-left'>
                        <span onClick={this.handleLeft}>＜</span>
                    </div>
                    <div className='carousel-control carousel-right'>
                        <span onClick={this.handleRight}>＞</span>
                    </div>
                    <div className='carousel-indicator'>
                        <div className='carousel-panels'>
                            {
                                data.map((datum, index) =>
                                    <span
                                        key={index}
                                        className={`carousel-panel ${current === index && 'active'}`}
                                        onClick={this.handleMove.bind(this, index)}
                                    />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}