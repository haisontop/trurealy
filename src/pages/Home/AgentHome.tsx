import React from "react";
import ConsumerBanner from "./components/ConsumerBanner";
import SmarterAgent from "./components/SmarterAgent/SmarterAgent";
import Trastory from "./components/Trastory/Trastory";
import ParfectAgent from "./components/PerfectAgent/ParfectAgent";
import { Container } from "react-bootstrap";
import Layout from "../../layouts/Layout";
import { MiddleBanner } from "../../components/MiddleBanner/MiddleBanner";
import TruIntro from "../../components/TruIntro";
import AgentBanner from "./components/AgentBanner";
import YourTools from "./components/YourTools";
import { AgentBottomBanner } from "./components/AgentBottomBanner/AgentBottomBanner";
import { AgentWelcome } from "./components/AgentWelcome";
import { AgentOurCulture } from "./components/AgentOurCulture";

const AgentHome = () => {
    return (
        <Layout>
            <AgentBanner />

            <Container className="px-0 bg-primary">
                <AgentWelcome />
                <YourTools />
                <AgentOurCulture />
                <div className="mt-5">
                    <TruIntro />
                </div>
            </Container>
            <AgentBottomBanner />
        </Layout>
    );
};

export default AgentHome;
