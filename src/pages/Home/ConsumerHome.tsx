import React from "react";
import ConsumerBanner from "./components/ConsumerBanner";
import SmarterAgent from "./components/SmarterAgent/SmarterAgent";
import Trastory from "./components/Trastory/Trastory";
import ParfectAgent from "./components/ParfectAgent";
import { Container } from "react-bootstrap";
import Layout from "../../layouts/Layout";
import { MiddleBanner } from "../../components/MiddleBanner/MiddleBanner";
import TruIntro from "../../components/TruIntro";

const ConsumerHome = () => {
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
                <TruIntro />
            </Container>
        </Layout>
    );
};

export default ConsumerHome;
