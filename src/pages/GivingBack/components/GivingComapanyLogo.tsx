import React from "react";

function GivingComapanyLogo() {
    return (
        <div className="orgnztn_logo_sec cmmn_gap big_top_gap">
            <div className="custom_container_fluid">
                <div className="page_heading text-center">
                    <h4>A few of the amazing organizations we have helped.</h4>
                </div>
                <div className="row align-items-center">
                    <div className=" col-sm-3   orgntn_col">
                        <div
                            className="orgtn_lgo_box aos-init aos-animate"
                            data-aos="zoom-in"
                        >
                            <img src="/img/orgntn_logo1.png" alt="" />
                        </div>
                    </div>
                    <div className=" col-sm-3   orgntn_col">
                        <div
                            className="orgtn_lgo_box aos-init aos-animate"
                            data-aos="zoom-in"
                        >
                            <img src="/img/orgntn_logo2.png" alt="" />
                        </div>
                    </div>
                    <div className=" col-sm-3   orgntn_col">
                        <div
                            className="orgtn_lgo_box aos-init aos-animate"
                            data-aos="zoom-in"
                        >
                            <img src="/img/orgntn_logo3.png" alt="" />
                        </div>
                    </div>
                    <div className=" col-sm-3   orgntn_col">
                        <div
                            className="orgtn_lgo_box aos-init aos-animate"
                            data-aos="zoom-in"
                        >
                            <img src="/img/orgntn_logo4.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GivingComapanyLogo;
