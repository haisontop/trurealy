import React from "react";
import Layout from "../../layouts/Layout";
import PrelicenseBanner from "./components/PrelicenseBanner/PrelicenseBanner";
import PrelicenseBottom from "./components/PrelicenseBottom/PrelicenseBottom";
import PrelicenseMiddleCard from "./components/PrelicenseCard/PrelicenseMiddleCard";
import TRUcareers from "./components/TRUCareers/TRUCareers";

export default function PrelicenseNCTemplets() {
    return (
        <Layout>
            <div className="container-fluid mx-auto px-0 pb-5 bg-dark-primary">
                <PrelicenseBanner />
                <PrelicenseMiddleCard />
                <TRUcareers />
                <PrelicenseBottom />
            </div>
        </Layout>
    );
}
