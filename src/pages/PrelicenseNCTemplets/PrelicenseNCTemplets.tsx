import React from "react";
import Layout from "../../layouts/Layout";
import PrelicenseBanner from "./Components/PrelicenseBanner/PrelicenseBanner";
import PrelicenseBottom from "./Components/PrelicenseBottom/PrelicenseBottom";
import PrelicenseMiddleCard from "./Components/PrelicenseCard/PrelicenseMiddleCard";
import TRUcareers from "./Components/TRU careers/TRUcareers";

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
