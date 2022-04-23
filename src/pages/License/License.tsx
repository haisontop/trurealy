import React from "react";
import Layout from "../../layouts/Layout";
import "./License.scss";
import TopSection from "./components/TopSection";
import BottomSection from "./components/BottomSection";
import MiddleSection1 from "./components/MiddleSection1";
import MiddleSection2 from "./components/MiddleSection2";
import MiddleSection3 from "./components/MiddleSection3";
import MiddleSection4 from "./components/MiddleSection4";
function License() {
    return (
        <>
            <Layout>
                <div className="license">
                    <TopSection />
                    <MiddleSection1 />
                    <MiddleSection2 />
                    {/* image hover boxes */}
                    <MiddleSection3 />
                    {/* image with text  */}
                    <MiddleSection4 />

                    {/* footer box   */}
                    <BottomSection />
                </div>
            </Layout>
        </>
    );
}

export default License;
