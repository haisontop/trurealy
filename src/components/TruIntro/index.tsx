import React from "react";
import { Container } from "react-bootstrap";
import style from "./TruIntro.module.scss";

interface TruIntroProps {
    title?: string;
    titleFontClassName?: string;
    subTitle?: string;
    subTitleFontClassName?: string;
    centerCTA?: boolean;
}

const TruIntro = (props: TruIntroProps) => {
    const {
        title = "Buy or Sell your home faster and safer with TRU",
        titleFontClassName = "fs-2",
        subTitleFontClassName = "fs-2 lh-1",
        subTitle = "Digital Closing Technology is now at your fingertips with TRU. Enjoy a modern real estate closing experience like no other through our unique partnership with endpoint.",
        centerCTA = false,
    } = props;

    return (
        <div className={`consumer-bottom ${style["tru-intro"]}`}>
            <Container className="mx-auto text-white">
                <h1 className={`text-center fw-bold ${titleFontClassName}`}>
                    {title}
                </h1>
                <div className="row mt-5 gx-md-5 px-3">
                    <div className="col-md-6">
                        <p className={`fw-medium ${subTitleFontClassName}`}>
                            {subTitle}
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img
                            src="/assets/endpoint-logo-white.png"
                            className="img-fluid"
                            alt=""
                        />
                        {!centerCTA && (
                            <div className="col-12">
                                <div className="mt-5 pt-4 d-flex justify-content-center">
                                    <button
                                        className="bg-white px-5 text-default fs-4 fw-medium border-0 "
                                        style={{ borderRadius: "10px" }}
                                    >
                                        Learn more about TRU’s Tech
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                    {centerCTA && (
                        <div className="col-12">
                            <div className="mt-5 pt-4 d-flex justify-content-center">
                                <button
                                    className="bg-white px-5 text-default fs-4 fw-medium py-2 border-0 mt-3"
                                    style={{ borderRadius: "10px" }}
                                >
                                    Learn more about TRU’s Tech
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </Container>
        </div>
    );
};

export default TruIntro;
