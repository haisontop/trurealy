import React from "react";
import { Container } from "react-bootstrap";
import AboutBottom from "./components/AboutBottom/AboutBottom";
import AboutDefference from "./components/AboutDefference/AboutDefference";
import AboutFeturedind from "./components/AboutFeturedind/AboutFeturedInd";
import AboutMap from "./components/AboutMap/AboutMap";
import AboutOurmission from "./components/AboutOurMission/AboutourMission";
import AboutTrustory from "./components/AboutTruStory/AboutTrustory";
import AboutPower from "./components/AboutPower/AboutPower";
import AboutSmarteragent from "./components/AboutSmaterAgent/AboutSmarterAgent";
import Layout from "../../layouts/Layout";
import AboutBanner from "./components/AboutBanner/AboutBanner";

const About = () => {
  return (
    <Layout>
      <Container className="px-0 mx-auto">
        <AboutBanner />
        <AboutOurmission />
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
