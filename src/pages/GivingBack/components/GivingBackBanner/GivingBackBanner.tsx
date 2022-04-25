import React from "react";
import { GradientDivider } from "../../../../components/GradientDivider";
import { BsSuitHeart } from 'react-icons/bs';

function GivingBackcoBanner() {
    return (
        <>
            <div className="position-relative">
                <img src="/assets/bg/giving-bg.png" alt="" loading="lazy" />

                <div className="position-absolute top-0 start-0 py-3 px-5 d-flex gap-2 align-items-center fw-bolder text-white" style={{ backgroundImage: 'linear-gradient(90deg, #FD084F 0%, #3B46F2 100%)', borderBottomRightRadius: '1rem', fontSize: '5rem' }}>
                    #TRUCARES
                    <BsSuitHeart className="ms-3" />
                </div>
                <div className="position-absolute bottom-0 end-0 w-75 bg-black bg-opacity-75 px-5 py-3 text-white" style={{ borderTopLeftRadius: '1rem' }}>
                    <h1 className="fw-bold">
                        TRU AGENTS ARE MAKING A DIFFERENCE
                    </h1>
                    <h4>
                        Our culture is defined by our values. At the core of those values is generosity. We believe in developing relationships with organizations and causes that positively impact their communities. Giving back is what we do, it’s who we are as an organization.
                    </h4>
                </div>
            </div>
            <div className="w-100 py-3 mb-5" style={{backgroundImage:'linear-gradient(270deg, #3B46F2 0%, #FD084F 100%)'}}/>
        </>
    );
}

export default GivingBackcoBanner;
