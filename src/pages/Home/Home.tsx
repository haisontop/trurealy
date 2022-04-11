import React from "react";
import Banner from "../../components/Home/Banner";
import FeaturedIn from "../../components/Home/FeaturedIn";
import { JoinUs } from "../../components/Home/JoinUs/JoinUs";
import Layout from "../../layouts/Layout";

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
