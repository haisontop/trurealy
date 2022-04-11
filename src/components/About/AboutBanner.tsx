import React from 'react';

const AboutBanner = () => {
    return (
        <div className='position-relative'>
            <div>
                <img src="/assets/placeholder.png" className='img-fluid m-5' width="90%" alt="" />
            </div>
            <div className='about-Consumer-banner-Box'>
                <div className='position-relative'>
                    <img src="/assets/Group 130.png" className='img-fluid' alt="" />
                    <h1 className='position-absolute top-0 text-white fw-bold'>INNOVATIVE, TECHNOLOGY DRIVEN, <br /> AGENT-CENTRIC.</h1>
                </div>
            </div>
        </div>
    );
}

export default AboutBanner;
