import React, { Component } from 'react';

import '../assets/css/components/footer.css';
import Images from '../assets/img';

export default class Footer extends Component {
    render = () => {
        return (
            <footer
                className={`footer`}
                style={{
                    backgroundImage:
                        `linear-gradient(rgba(0, 0, 0, 1),  rgba(0, 0, 0, 1)), url(${Images.Footer.path})`
                }}
            >
                <div className={`footer-back`}></div>
                <div className={`footer-overlay`}>
                    <div className={`footer-content`}>
                        <div className={`copyright`}>©EVERIP 2019. All Right Reserved</div>
                        <div className={`links`}>
                            <span onClick={() => { window.open('https://www.facebook.com/profile.php?id=100008311933745') }}>Facebook</span>
                            <span onClick={() => { window.open('https://github.com/trip-wherever-you-want-go') }}>GitHub</span>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}