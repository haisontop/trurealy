import React from "react";
import { Container } from "react-bootstrap";
import styles from "./AboutMission.module.scss";

const AboutMission = () => {
  return (
    <div className={styles["about-consumer-mission"]}>
      <Container className="mx-auto px-0">
        <div className="row gx-4">
          <div className="col-7 ps-5 text-black">
            <div className="mt-3">
              <div className="fs-1 font-weight-normal">OUR MISSION</div>
              <p className="mt-1">
                To create a diverse and inclusive culture focused on training
                and education coupled with innovative technology to provide an
                unparalleled level of service to the agents and the communities
                we serve.
              </p>
            </div>
            <div className="mt-4">
              <h1 className="">WHO WE ARE</h1>
              <p className="mt-3">
                Headquartered in Scottsdale, Arizona, TRU Realty is an
                innovative, tech-driven and customer-centric real estate
                brokerage providing an unparalleled real estate experience to
                consumers and agents alike.
              </p>
              <p>
                TRU Realty has elevated the quality of service to our clients by
                providing an unprecedented amount of support to its real estate
                agents. We are recognized as a modern, professional, tech-driven
                real estate company by both consumers and agents alike. The
                organic growth of the TRU Realty brand has garnered us a
                reputation for excellence nationwide and recognition for having
                some of the best agents across the country.
              </p>
            </div>
          </div>
          <div className="col-5">
            <img src="/assets/Group 129.png" className="img-fluid" alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutMission;
