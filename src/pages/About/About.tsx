import React from "react";
import { Container } from "react-bootstrap";
import AboutBottom from "./components/AboutBottom";
import AboutDefference from "./components/AboutDefference/AboutDefference";
import AboutFeturedind from "./components/AboutFeturedInd";
import AboutMap from "./components/AboutMap";
import AboutMission from "./components/AboutMission/AboutMission";
import AboutTrustory from "./components/AboutTrustory/AboutTrustory";
import AboutPower from "./components/AboutPower";
import AboutSmarteragent from "./components/AboutSmarterAgent";
import Layout from "../../layouts/Layout";
import AboutBanner from "./components/AboutBanner/AboutBanner";

const About = () => {
  return (
    <Layout>
      <Container className="px-0 mx-auto">
        <AboutBanner />
        <AboutMission />
        <AboutFeturedind />
        <AboutSmarteragent />
        <AboutPower />
        <AboutTrustory />
        <AboutDefference />
        <AboutMap />
        <AboutBottom />
      </Container>
    </Layout>
  );
};

export default About;
