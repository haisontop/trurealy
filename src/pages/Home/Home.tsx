import React from "react";
import { FeaturedIn } from "../../components/FeaturedIn";
import Layout from "../../layouts/Layout";
import Banner from "./components/Banner";
import { JoinUs } from "./components/JoinUs";

const Home = () => {
    return (
        <Layout>
            <Banner />
            <div className="mt-4">
                <FeaturedIn />
            </div>
            <JoinUs />
        </Layout>
    );
};

export default Home;
