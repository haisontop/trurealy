import React from "react";
import ConsumerBanner from "./components/ConsumerBanner";
import SmarterAgent from "./components/SmarterAgent";
import Trastory from "./components/Trastory/Trastory";
import ConsumerMiddleBanner from "./components/ConsumerMiddleBanner";
import ParfectAgent from "./components/ParfectAgent";
import ConsumerBottom from "./components/ConsumerBottom";
import { Container } from "react-bootstrap";
import Layout from "../../layouts/Layout";

const HomeConsumer = () => {
  return (
    <Layout>
      <ConsumerBanner />
      <Container className="px-0">
        <SmarterAgent />
        <Trastory />
        <ConsumerMiddleBanner />
        <ParfectAgent />
        <ConsumerBottom />
      </Container>
    </Layout>
  );
};

export default HomeConsumer;
