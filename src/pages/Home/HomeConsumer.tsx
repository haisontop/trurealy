import React from "react";
import ConsumerBanner from "./components/ConsumerBanner";
import SmarterAgent from "./components/SmarterAgent/SmarterAgent";
import Trastory from "./components/Trastory/Trastory";
import ParfectAgent from "./components/ParfectAgent";
import ConsumerBottom from "./components/ConsumerBottom";
import { Container } from "react-bootstrap";
import Layout from "../../layouts/Layout";
import { MiddleBanner } from "../../components/MiddleBanner/MiddleBanner";

const HomeConsumer = () => {
    return (
        <Layout>
            <ConsumerBanner />
            <Container className="px-0">
                <SmarterAgent />
                <Trastory />
                <MiddleBanner
                    title="TRAINING, TECHNOLOGY AND TRANSPARENCY"
                    description="THAT RESHAPES AND PROTECTS YUR CONSUMER EXPERIENCE."
                />
                <ParfectAgent />
                <ConsumerBottom />
            </Container>
        </Layout>
    );
};

export default HomeConsumer;
