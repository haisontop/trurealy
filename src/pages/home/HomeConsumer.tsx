import React from "react";
import ConsumerBanner from "../../components/home/ConsumerBanner";
import SmarterAgent from "../../components/home/SmarterAgent";
import Trastory from "../../components/home/Trastory/Trastory";
import ConsumerMiddleBanner from "../../components/home/ConsumerMiddleBanner";
import ParfectAgent from "../../components/home/ParfectAgent";
import ConsumerBottom from "../../components/home/ConsumerBottom";
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
