import React from "react";
import { Container } from "react-bootstrap";
import Aboutbanner from "../../components/about/AboutBanner";
import Aboutcobottom from "../../components/about/AboutCoBottom";
import Aboutcodefference from "../../components/about/AboutCoDefference";
import Aboutcofeturedind from "../../components/about/AboutCoFeturedInd";
import Aboutcomap from "../../components/about/AboutCoMap";
import Aboutcoourmission from "../../components/about/AboutCOourMission";
import Aboutcotrustory from "../../components/about/AboutCoTrustory";
import Aboutpower from "../../components/about/AboutPower";
import Aboutsmarteragent from "../../components/about/AboutSmarterAgent";
import Layout from "../../components/Layout";
import Navigation from "../../components/Navigation";

const Aboutconsumer = () => {
  return (
    <Layout>
      <Container className="px-0 mx-auto">
        <Aboutbanner />
        <Aboutcoourmission />
        <Aboutcofeturedind />
        <Aboutsmarteragent />
        <Aboutpower />
        <Aboutcotrustory />
        <Aboutcodefference />
        <Aboutcomap />
        <Aboutcobottom />
      </Container>
    </Layout>
  );
};

export default Aboutconsumer;
