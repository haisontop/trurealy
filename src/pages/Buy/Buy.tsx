import React from "react";
import Layout from "../../layouts/Layout";
import BuyBody from "./components/Buybody/BuyBody";
import BuyBanner from "./components/BuyBanner/BuyBanner";
import BuyMiddle from "./components/BuyMiddle/BuyMiddle";
import BuyBottom from "./components/BuyBottom/BuyBottom";

export default function Buy() {
    return (
        <div>
            <Layout>
                <div className="container mx-auto px-0">
                    <BuyBanner />
                    <BuyMiddle />
                    <BuyBody />
                    <BuyBottom />
                </div>
            </Layout>
        </div>
    );
}
