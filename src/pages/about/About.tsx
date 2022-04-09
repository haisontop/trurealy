import React from "react";
import { Container } from "react-bootstrap";
import AboutBanner from "../../components/about/AboutBanner";
import AboutBottom from "../../components/about/AboutBottom";
import AboutDefference from "../../components/about/AboutDefference";
import AboutFeturedind from "../../components/about/AboutFeturedInd";
import AboutMap from "../../components/about/AboutMap";
import AboutOurmission from "../../components/about/AboutourMission";
import AboutTrustory from "../../components/about/AboutTrustory";
import AboutPower from "../../components/about/AboutPower";
import AboutSmarteragent from "../../components/about/AboutSmarterAgent";
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
