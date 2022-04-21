import React from "react";
import GivingBackcoBanner from "./components/GivingBackBanner/GivingBackBanner";
import GivingBackMiddle from "./components/GivingBackMiddle/GivingBackMiddle";
import GivingBottom from "./components/GivingBottom/GivingBottom";
import GivingComapanyLogo from "./components/GivingComapanyLogo";
import Layout from "../../layouts/Layout";

function GivingBack() {
    return (
        <div>
            <Layout>
                <div className="container px-0 mx-auto">
                    <GivingBackcoBanner />
                    <GivingComapanyLogo />
                    <GivingBackMiddle />
                    <GivingBottom />
                </div>
            </Layout>
        </div>
    );
}

export default GivingBack;
