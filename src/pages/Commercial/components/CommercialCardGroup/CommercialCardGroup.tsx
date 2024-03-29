import React from "react";
import Slider from "react-slick";
import CommercialCard from "./CommercialCard";
import style from "./CommercialCardGroup.module.scss";

export default function CommercialCardGroup() {
    const data = [
        {
            name: "Roger Brevoort",
            email: "Roger@trurealty.com",
            link: "/",
            img: "/assets/agent directory/Roger B 2.png",
        },
        {
            name: "Roger Brevoort",
            email: "Roger@trurealtyd.com",
            link: "/",
            img: "/assets/agent directory/Roger B 2.png",
        },
        {
            name: "Roger Brevoort",
            email: "Roger@trurealtys.com",
            link: "/",
            img: "/assets/agent directory/Roger B 2.png",
        },
        {
            name: "Roger Brevoort",
            email: "Roger@trurealty.trcom",
            link: "/",
            img: "/assets/agent directory/Roger B 2.png",
        },
        {
            name: "Roger Brevoort",
            email: "Roger@trurealtyse.com",
            link: "/",
            img: "/assets/agent directory/Roger B 2.png",
        },
    ];
    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        dotsClass: `slick-dots ${style["custom-indicator"]}`,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className={`${style["Commercial-Card-Group"]}`}>
            <div className={`${style["linear-gradient"]}`} />
            <div className={`mx-auto container-fluid ${style["carousel-div"]}`}>
                <h4 className="text-white mx-2 mx-md-5">
                    Meet a few of the Commercial Agents…
                </h4>
                <div className={`${style["carousel"]}`}>
                    <Slider {...settings}>
                        {data.map((dt) => (
                            <CommercialCard
                                key={dt.email}
                                name={dt.name}
                                email={dt.email}
                                link={dt.link}
                                img={dt.img}
                            />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}
