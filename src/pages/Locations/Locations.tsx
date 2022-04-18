import React from "react";
import Layout from "../../layouts/Layout";
import "./Locations.scss";
function Locations() {
    return (
        <>
            <Layout>
                <div className="location">
                    <div className="locationWrapper__header">
                        <h2>TRU IS NATIONWIDE</h2>
                        <h3>BUT STILL HERE JUST FOR YOU</h3>
                    </div>
                    <div className="container mx-auto mapBox">
                        <div className="row mt-5 g-5">
                            <div className="col-8">
                                <img
                                    src="/assets/US map.png"
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                            <div className="col-4">
                                <div className="infoBox"></div>
                            </div>
                        </div>
                        <div className="offset-3 col-6 search text-center">
                            <input
                                placeholder="4049 E Taro Ln"
                                className="col-9"
                                type="text"
                            />
                            <button className="mx-1">SEARCH</button>
                        </div>
                    </div>
                    <div className="locationPageWrapper__body__footer">
                        <div className="locationPageWrapper__body__footer__info">
                            <h2>
                                Find Us Anywhere, And We Will Find Your TRU
                                Calling
                            </h2>
                            <div className="d-flex">
                                <button className="locationPageWrapper__body__footer-cta">
                                    Join the Tru Team
                                </button>
                                <button className="locationPageWrapper__body__footer-cta">
                                    Become an Agent
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Locations;
