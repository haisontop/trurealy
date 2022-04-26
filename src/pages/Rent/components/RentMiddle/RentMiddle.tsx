import React from "react";
import style from "./RentMiddle.module.scss";

export default function RentMiddle() {
    return (
        <div className={`container px-md-5 mx-auto ${style["buy-middle"]}`}>
            <div className={`text-primary mb-5`}>
                <p className="mt-md-5  fw-medium">
                    Let us guide and inform your next move with up to date
                    statistics and information on neighborhoods, <br /> school
                    districts, shopping, restaurants, highways, commutes, parks,
                    recreation and so much more! Find <br /> your dream home
                    with TRU.
                </p>
            </div>
            <div className={`row pt-md-5 pt-4`}>
                <div className={`col-md-6`}>
                    <img
                        src="/assets/images/Group 31289.png"
                        className="img-fluid"
                        width="100%"
                        alt=""
                    />
                </div>
                <div className={`col-md-6 d-flex aling-items-center`}>
                    <div className="mt-5 my-md-auto">
                        <h3 className="fw-bold text-primary">
                            MORE RENTERS CHOOSE TRU
                        </h3>
                        <p className="text-primary mt-4 fw-medium">
                            Looking for representation as a Renter? TRU is
                            dedicated to learning your needs and delivering
                            excellence. If you’re looking for a group of
                            forward-thinking real estate professionals, you’ve
                            found it with TRU. Let’s find your dream home
                            together!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
