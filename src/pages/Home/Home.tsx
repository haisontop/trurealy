import React from "react";
import { FeaturedIn } from "../../components/FeaturedIn";
import { GradientDivider } from "../../components/GradientDivider";
import Layout from "../../layouts/Layout";
import { Banner } from "./components/Banner";
import { JoinUs } from "./components/JoinUs";

const Home = () => {
    return (
        <Layout>
            <Banner />
            <GradientDivider />
            <div className="mt-4">
                <FeaturedIn />
            </div>
            <JoinUs />
        </Layout>
    );
};

export default Home;
