import React from "react";
import Socialcotop from "../../components/Socialfeeds/consumer/SocialCoTop";
import Layout from "../../layouts/Layout";

const SocialfeedConsumer = () => {
  return (
    <div>
      <Layout>
        <div className="container mx-auto">
          <Socialcotop />
        </div>
      </Layout>
    </div>
  );
};

export default SocialfeedConsumer;
