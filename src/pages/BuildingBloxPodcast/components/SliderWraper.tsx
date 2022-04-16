import React, { useEffect, useState } from "react";
import Slider from "react-slick";

function SliderWraper(props: any) {
    // console.log(props.sendSettings);
    // const [Settings, setSettings] = useState({});
    // useEffect(() => {
    //     setSettings(props.sendSettings);

    //     return () => {};
    // }, []);

    var settings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const carouselItems = React.useMemo(() => {
        return [0, 1, 2, 3].map((member, ind) => {
            return (
                <div key={ind}>
                    <div className="pdcst_item">
                        <a className="pdcst_box">
                            <figure>
                                <img
                                    src="/img/buldng_box1.jpg"
                                    alt=""
                                    className="w-100"
                                />
                            </figure>
                            <div className="pdcst_txt">
                                <p>
                                    Welcome back friends to another empowering
                                    episode of Building Blox! The power of now
                                    and taking action today, are the fundamental
                                    underpinnings of being an Entrepreneur and
                                    growing a business. Don’t wait to start your
                                    dream career, begin with the small the step
                                    of starting NOW. How will you begin your
                                    journey?
                                </p>
                                <h5>START LISTENING</h5>
                            </div>
                        </a>
                    </div>

                    <div className="pdcst_item">
                        <a className="pdcst_box">
                            <figure>
                                <img
                                    src="/img/buldng_box1.jpg"
                                    alt=""
                                    className="w-100"
                                />
                            </figure>
                            <div className="pdcst_txt">
                                <p>
                                    Welcome back friends to another empowering
                                    episode of Building Blox! The power of now
                                    and taking action today, are the fundamental
                                    underpinnings of being an Entrepreneur and
                                    growing a business. Don’t wait to start your
                                    dream career, begin with the small the step
                                    of starting NOW. How will you begin your
                                    journey?
                                </p>
                                <h5>START LISTENING</h5>
                            </div>
                        </a>
                    </div>
                </div>
            );
        });
    }, []);

    return (
        <div
            className="podcast_sec cmmn_gap big_top_gap"
            style={{ backgroundImage: "url('img/21.png') , url('img/22.png')" }}
        >
            <div className="custom_container_fluid">
                <div className="page_lrge_heading">
                    <h1>
                        <span>THE TRU PODCAST</span>
                        FOR REALTORS
                    </h1>
                </div>
                <div className="">
                    <Slider {...settings} className="pdcst_sldr">
                        {carouselItems}
                    </Slider>
                </div>
            </div>
            <div className="shape1">
                <img src="images/shape1.svg" alt="" />
            </div>
            <div className="shape2">
                <img src="images/shape2.svg" alt="" />
            </div>
        </div>
    );
}

export default SliderWraper;
