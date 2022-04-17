import React from "react";
import Layout from "../../layouts/Layout";
import PrelicenseBanner from "./components/PrelicenseBanner/PrelicenseBanner";
import PrelicenseBottom from "./components/PrelicenseBottom/PrelicenseBottom";
import PrelicenseMiddleCard from "./components/PrelicenseCard/PrelicenseMiddleCard";
import TRUcareers from "./components/TRU careers/TRUcareers";

export default function PrelicenseNCTemplets() {
    return (
        <Layout>
            <div className="container mx-auto px-0 pb-5 bg-dark-primary">
                <PrelicenseBanner />
                <PrelicenseMiddleCard />
                <TRUcareers />
                <PrelicenseBottom />
            </div>
        </Layout>
    );
}
