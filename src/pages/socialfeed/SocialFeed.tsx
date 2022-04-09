import React from "react";
import SocialCoMiddle from "../../components/Socialfeeds/consumer/SocialCoMiddle";
import Socialcotop from "../../components/Socialfeeds/consumer/SocialCoTop";
import Layout from "../../layouts/Layout";

const Socialfeed = () => {
  return (
    <div>
      <Layout>
        <div className="container mx-auto">
          <Socialcotop />
          <SocialCoMiddle />
        </div>
      </Layout>
    </div>
  );
};

export default Socialfeed;
