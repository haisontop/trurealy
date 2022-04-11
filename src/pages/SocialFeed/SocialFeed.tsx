import React from "react";
import SocialMiddle from "../../components/Socialfeeds/consumer/SocialMiddle";
import SocialTop from "../../components/Socialfeeds/consumer/SocialTop";
import Layout from "../../layouts/Layout";

const Socialfeed = () => {
  return (
    <div>
      <Layout>
        <div className="container mx-auto">
          <SocialTop />
          <SocialMiddle />
        </div>
      </Layout>
    </div>
  );
};

export default Socialfeed;
