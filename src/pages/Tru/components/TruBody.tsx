import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import SamanthaSloan from "../../../assets/image/SamanthaSloan.png";
import placeholder3 from "../../../assets/image/placeholder3.png";
import Tia_Peterson_REALTOR_Tru_Realty from "../../../assets/image/Tia_Peterson_REALTOR_Tru_Realty.png";
import system from "../../../assets/image/system.png";
import placeholder4 from "../../../assets/image/placeholder3.png";

const TruBody = () => {
    return (
        <Col>
            <Row>
                <Col sm={12} className="p-0">
                    <section className="carousel-sec pd-60-85 text-center">
                        <div className="semi-circle"></div>

                        <Row>
                            <Col sm={12}>
                                <h1 className="inner-title mb-40">
                                    OUR EDUCATION PLATFORM WILL SET YOU UP FOR
                                    LIFE
                                </h1>
                                <p className="desc">
                                    Checkmate… God help us, we’re in the hands
                                    of engineers. Hey, you know how I’m, like,
                                    always trying to save the planet? Here’s my
                                    chance.
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Carousel>
                                    <Carousel.Item>
                                        <Row>
                                            <Col sm={12}>
                                                <img
                                                    src={placeholder3}
                                                    className="d-block w-100 slide_img"
                                                    alt="img"
                                                />
                                            </Col>
                                            <Col lg={6} sm={12}>
                                                <img
                                                    src={SamanthaSloan}
                                                    className="d-block w-100"
                                                    alt="img"
                                                />
                                            </Col>
                                            <Col lg={6} sm={12}>
                                                <p className="quote">
                                                    God help us, we're in the
                                                    hands of engineers. Must go
                                                    faster... go, go, go, go,
                                                    go! What do they got in
                                                    there? King Kong? God
                                                    creates dinosaurs. God
                                                    destroys dinosaurs. God
                                                    creates Man. Man destroys
                                                    God. Man creates Dinosaurs.
                                                    Yes, Yes, without the oops!
                                                </p>
                                                <p>- Jeff Goldblum</p>
                                            </Col>
                                        </Row>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Row>
                                            <Col sm={12}>
                                                <img
                                                    src={placeholder3}
                                                    className="d-block w-100 slide_img"
                                                    alt="img"
                                                />
                                            </Col>
                                            <Col lg={6} sm={12}>
                                                <img
                                                    src={
                                                        Tia_Peterson_REALTOR_Tru_Realty
                                                    }
                                                    className="d-block w-100"
                                                    alt="img"
                                                />
                                            </Col>
                                            <Col lg={6} sm={12}>
                                                <p className="quote">
                                                    We gotta burn the rain
                                                    forest, dump toxic waste,
                                                    pollute the air, and rip up
                                                    the OZONE! ‘Cause maybe if
                                                    we screw up this planet
                                                    enough, they won’t want it
                                                    anymore! We gotta burn the
                                                    rain forest, dump toxic
                                                    waste, pollute the air, and
                                                    rip up the earth.
                                                </p>
                                                <p>- Almost Jeff Goldblum</p>
                                            </Col>
                                        </Row>
                                    </Carousel.Item>
                                </Carousel>
                            </Col>
                        </Row>
                    </section>
                    <section className="training-platform pd-60-85 text-left">
                        <Row>
                            <Col sm={12}>
                                <h1 className="inner-title mb-40">
                                    OUR TRAINING PLATFORM
                                </h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <p>
                                    Our training platform is top of the line
                                    software that brings in our community of
                                    agents together to learn together and
                                    collaborate
                                </p>
                                <p>
                                    We gotta burn the rain forest, dump toxic
                                    waste, pollute the air, and rip up the
                                    OZONE! ‘Cause maybe if we screw up this
                                    planet enough, they won’t want it anymore!
                                </p>
                            </Col>
                            <Col sm={6}>
                                <img
                                    src={system}
                                    className="d-block w-100 "
                                    alt="img"
                                />
                            </Col>
                        </Row>
                    </section>
                    <section className="learn-sec text-left">
                        <Row className="m-0">
                            <Col sm={6} className="p-0">
                                <img
                                    src={placeholder4}
                                    className="d-block w-100 "
                                    alt="img"
                                    style={{ height: "556px" }}
                                />
                            </Col>
                            <Col sm={6} className="p-0">
                                <h1 className="inner-title mb-40">
                                    LEARN & EARN
                                </h1>
                                <p>
                                    Learn and earn company stock. While you
                                    invest in your education, you invest in TRU.
                                </p>
                                <p>
                                    We gotta burn the rain forest, dump toxic
                                    waste, pollute the air.
                                </p>
                                <Button variant="primary link">
                                    Discover more
                                </Button>
                            </Col>
                        </Row>
                    </section>
                </Col>
            </Row>
        </Col>
    );
};

export default TruBody;
