import React, { useState } from "react";
import { ProgressBar } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import SideBar from "../../components/SideBar";

export default function Agent({ onSubmit, onPrevious }: any) {
    let navigate = useNavigate();
    const [step, setStep] = useState(0);
    const now = 50;
    const handleNext = () => {
        setStep(step + 1);
    };
    return (
        <div className="NewAgentSection">
            <div className="container-fluid Agentmain">
                <div className="row">
                    <div className="col-lg-9 col-md-12 col-12 allAgentmain g-0">
                        <div className="agentTitle">
                            <h1>New Agent sign up</h1>
                            <p>
                                Welcome to TRU Realty. Ready to get started?
                                Please fill out the form below.
                            </p>
                        </div>
                        <form onSubmit={handleNext}>
                            <div className="mainagentbox">
                                <label className="agentstep">Step 1 of 2</label>
                                <div className="agentProgess">
                                    <ProgressBar now={now} label={`${now}%`} />;
                                </div>
                                <div className="agentSign">
                                    <p className="agentname">
                                        Name<span>(Required)</span>
                                    </p>
                                    <p className="agentnewconatin">
                                        Enter Your Legal name as it would appear
                                        on your Real Estate License
                                    </p>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3 col-md-6">
                                        <div className="firstName">
                                            <input type="text" className="" />
                                            <label>First</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="firstName">
                                            <input type="text" className="" />
                                            <label>Middle</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="firstName">
                                            <input type="text" className="" />
                                            <label>Last</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="firstName">
                                            <input type="text" className="" />
                                            <label>Suffix</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="agentSign agentaddress">
                                    <p className="agentname">
                                        Personal Email Address
                                        <span>(Required)</span>
                                    </p>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="firstName">
                                            <input type="text" className="" />
                                            <label>Enter Email</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="firstName">
                                            <input type="text" className="" />
                                            <label>Confirm Email</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="agentSign agentaddress">
                                    <p className="agentname">
                                        Cell Phone/Home<span>(Required)</span>
                                    </p>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="firstName">
                                            <input type="text" className="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="agentSign agentaddress">
                                    <p className="agentname">
                                        Zipcode<span>(Required)</span>
                                    </p>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="firstName">
                                            <input type="text" className="" />
                                        </div>
                                        <div className="Nextbtn">
                                            <button
                                                type="submit"
                                                onClick={onSubmit}
                                            >
                                                Next
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <SideBar />
                </div>
            </div>
        </div>
    );
}
