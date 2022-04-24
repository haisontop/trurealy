import React from "react";
import { Container } from "react-bootstrap";
import style from "./AboutourMission.module.scss";

const AboutourMission = () => {
    return (
        <div className={`position-relative ${style["about-consumer-mission"]}`}>
            <Container className="mx-auto px-0">
                <div className="row gx-5 px-md-5">
                    <div className="col-6 text-primary">
                        <div className="mt-4">
                            <h2 className="fw-bold">OUR MISSION</h2>
                            <p className="mt-1">
                                To create a diverse and inclusive culture
                                focused on training and education coupled with
                                innovative technology to provide an unparalleled
                                level of service to the agents and the
                                communities we serve.
                            </p>
                        </div>
                        <div className="mt-5">
                            <h1 className="fw-bold">WHO WE ARE</h1>
                            <p className="mt-3">
                                Headquartered in Scottsdale, Arizona, TRU Realty
                                is an innovative, tech-driven and
                                customer-centric real estate brokerage providing
                                an unparalleled real estate experience to
                                consumers and agents alike.
                            </p>
                            <p className="mt-5">
                                Founded in 2011 by Sarah Richardson, TRU has
                                elevated the quality of service to our clients
                                by providing an unprecedented amount of support
                                to its real estate agents. We are recognized as
                                a modern, professional, tech-driven real estate
                                company by both consumers and agents alike. The
                                organic growth of the TRU brand has garnered us
                                a reputation for excellence nationwide and
                                recognition for having some of the best agents
                                across the country. Choose transparency and
                                accountability. Choose TRU as your guide and
                                trusted advisor for your next purchase or sale.
                                We can’t wait to be a part of your continued
                                success!
                            </p>
                        </div>
                    </div>
                    <div className="col-6">
                        <img
                            src="/assets/Group 129.png"
                            className="img-fluid"
                            alt=""
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AboutourMission;
