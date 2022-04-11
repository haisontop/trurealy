import React from "react";
import { Container } from "react-bootstrap";
import AboutBanner from "../../components/About/AboutBanner";
import AboutBottom from "../../components/About/AboutBottom";
import AboutDefference from "../../components/About/AboutDefference";
import AboutFeturedind from "../../components/About/AboutFeturedInd";
import AboutMap from "../../components/About/AboutMap";
import AboutOurmission from "../../components/About/AboutourMission";
import AboutTrustory from "../../components/About/AboutTrustory";
import AboutPower from "../../components/About/AboutPower";
import AboutSmarteragent from "../../components/About/AboutSmarterAgent";
import Layout from "../../layouts/Layout";

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
