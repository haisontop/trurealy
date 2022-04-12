import React from "react";
import { FeaturedIn } from "../../components/FeaturedIn";
import Layout from "../../layouts/Layout";
import Banner from "./components/Banner";
import { JoinUs } from "./components/JoinUs";

const Home = () => {
  return (
    <Layout>
      <div>
        <Banner />
        <div className="mt-4">
          <FeaturedIn />
        </div>
        <JoinUs />
      </div>
    </Layout>
  );
};

export default Home;
