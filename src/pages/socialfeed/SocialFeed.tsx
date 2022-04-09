import React from "react";
import Socialcotop from "../../components/Socialfeeds/consumer/SocialCoTop";
import Layout from "../../layouts/Layout";

const Socialfeed = () => {
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

export default Socialfeed;
