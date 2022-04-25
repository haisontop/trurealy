import React from "react";
import Layout from "../../layouts/Layout";
import RentBottom from "./components/RentBottom/RentBottom";
import RentMap from "./components/RentMap/RentMap";
import RentMiddle from "./components/RentMiddle/RentMiddle";
import RentBanner from "./components/RnetBanner/RentBanner";

export default function Rent() {
    return (
        <Layout>
            <div className="container px-0 mx-auto">
             <RentBanner />
             <RentMiddle />
             <RentMap />
             <RentBottom />
            </div>
        </Layout>
    );
}
