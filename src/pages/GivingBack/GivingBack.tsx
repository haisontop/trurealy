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
                <section className="GivingBackPage">
                    <GivingBackcoBanner />
                    <GivingComapanyLogo />
                    <GivingBackMiddle />
                    <GivingBottom />
                </section>
            </Layout>
        </div>
    );
}

export default GivingBack;
