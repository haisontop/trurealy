import React from "react";
import { Row, Col, Carousel } from "react-bootstrap";
import { useState } from "react";
import pod1 from "../../../assets/image/pod1.png";
import pod2 from "../../../assets/image/pod2.png";
import pod3 from "../../../assets/image/pod3.png";
import pod4 from "../../../assets/image/pod4.png";
import pod5 from "../../../assets/image/pod5.png";
import pod6 from "../../../assets/image/pod6.png";
import PodcastListen from "./PodcastListen";

const PodcastCarousel = () => {
    const [showText, setShowText] = useState(false);

    const onClick = () => {
        setShowText(true);
    };
    return (
        <>
            <Row>
                <Col>{showText ? <PodcastListen /> : null}</Col>
            </Row>
            <Row>
                <Col>
                    <Carousel className="podcast-carousel">
                        <Carousel.Item>
                            <Row>
                                <Col sm={4}>
                                    <div className="pod-item">
                                        <img
                                            src={pod1}
                                            className="w-100"
                                            alt="img"
                                        />
                                        <div className="overlay">
                                            <div className="text">
                                                <p>
                                                    Welcome back friends to
                                                    another empowering episode
                                                    of Building Blox! The power
                                                    of now and taking ...
                                                </p>
                                                <h3 onClick={onClick}>
                                                    START LISTENING
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <div className="pod-item">
                                        <img
                                            src={pod2}
                                            className="w-100"
                                            alt="img"
                                        />
                                        <div className="overlay">
                                            <div className="text">
                                                <p>
                                                    Welcome back friends to
                                                    another empowering episode
                                                    of Building Blox! The power
                                                    of now and taking ...
                                                </p>
                                                <h3 onClick={onClick}>
                                                    START LISTENING
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <div className="pod-item">
                                        <img
                                            src={pod3}
                                            className="w-100"
                                            alt="img"
                                        />
                                        <div className="overlay">
                                            <div className="text">
                                                <p>
                                                    Welcome back friends to
                                                    another empowering episode
                                                    of Building Blox! The power
                                                    of now and taking ...
                                                </p>
                                                <h3>START LISTENING</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <div className="pod-item">
                                        <img
                                            src={pod4}
                                            className="w-100"
                                            alt="img"
                                        />
                                        <div className="overlay">
                                            <div className="text">
                                                <p>
                                                    Welcome back friends to
                                                    another empowering episode
                                                    of Building Blox! The power
                                                    of now and taking ...
                                                </p>
                                                <h3>START LISTENING</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <div className="pod-item">
                                        <img
                                            src={pod5}
                                            className="w-100"
                                            alt="img"
                                        />
                                        <div className="overlay">
                                            <div className="text">
                                                <p>
                                                    Welcome back friends to
                                                    another empowering episode
                                                    of Building Blox! The power
                                                    of now and taking ...
                                                </p>
                                                <h3>START LISTENING</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <div className="pod-item">
                                        <img
                                            src={pod6}
                                            className="w-100"
                                            alt="img"
                                        />
                                        <div className="overlay">
                                            <div className="text">
                                                <p>
                                                    Welcome back friends to
                                                    another empowering episode
                                                    of Building Blox! The power
                                                    of now and taking ...
                                                </p>
                                                <h3>START LISTENING</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                <Col sm={4}>
                                    <div className="pod-item">
                                        <img
                                            src={pod1}
                                            className="w-100"
                                            alt="img"
                                        />
                                        <div className="overlay">
                                            <div className="text">
                                                <p>
                                                    Welcome back friends to
                                                    another empowering episode
                                                    of Building Blox! The power
                                                    of now and taking ...
                                                </p>
                                                <h3>START LISTENING</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <div className="pod-item">
                                        <img
                                            src={pod2}
                                            className="w-100"
                                            alt="img"
                                        />
                                        <div className="overlay">
                                            <div className="text">
                                                <p>
                                                    Welcome back friends to
                                                    another empowering episode
                                                    of Building Blox! The power
                                                    of now and taking ...
                                                </p>
                                                <h3>START LISTENING</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <div className="pod-item">
                                        <img
                                            src={pod3}
                                            className="w-100"
                                            alt="img"
                                        />
                                        <div className="overlay">
                                            <div className="text">
                                                <p>
                                                    Welcome back friends to
                                                    another empowering episode
                                                    of Building Blox! The power
                                                    of now and taking ...
                                                </p>
                                                <h3>START LISTENING</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <div className="pod-item">
                                        <img
                                            src={pod4}
                                            className="w-100"
                                            alt="img"
                                        />
                                        <div className="overlay">
                                            <div className="text">
                                                <p>
                                                    Welcome back friends to
                                                    another empowering episode
                                                    of Building Blox! The power
                                                    of now and taking ...
                                                </p>
                                                <h3>START LISTENING</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <div className="pod-item">
                                        <img
                                            src={pod5}
                                            className="w-100"
                                            alt="img"
                                        />
                                        <div className="overlay">
                                            <div className="text">
                                                <p>
                                                    Welcome back friends to
                                                    another empowering episode
                                                    of Building Blox! The power
                                                    of now and taking ...
                                                </p>
                                                <h3>START LISTENING</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <div className="pod-item">
                                        <img
                                            src={pod6}
                                            className="w-100"
                                            alt="img"
                                        />
                                        <div className="overlay">
                                            <div className="text">
                                                <p>
                                                    Welcome back friends to
                                                    another empowering episode
                                                    of Building Blox! The power
                                                    of now and taking ...
                                                </p>
                                                <h3>START LISTENING</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </>
    );
};

export default PodcastCarousel;
