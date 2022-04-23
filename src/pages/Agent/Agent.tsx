import React from "react";
import { Form, ProgressBar } from "react-bootstrap";

interface AgentSignUpProps {
    onSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Agent({ onSubmit }: AgentSignUpProps) {
    const now = 50;
    return (
        <Form>
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
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="firstName">
                                <input type="text" />
                                <label>First</label>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="firstName">
                                <input type="text" />
                                <label>Middle</label>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="firstName">
                                <input type="text" />
                                <label>Last</label>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="firstName">
                                <input type="text" />
                                <label>Suffix</label>
                            </div>
                        </div>
                    </div>
                    <div className="agentaddress">
                        <p className="agentname">
                            Personal Email Address
                            <span>(Required)</span>
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="firstName">
                                <input type="text" />
                                <label>Enter Email</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="firstName">
                                <input type="text" />
                                <label>Confirm Email</label>
                            </div>
                        </div>
                    </div>
                    <div className="agentaddress">
                        <p className="agentname">
                            Cell Phone/Home<span>(Required)</span>
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="firstName">
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="agentaddress">
                        <p className="agentname">
                            Zipcode<span>(Required)</span>
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="firstName">
                                <input type="text" />
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
            </div>
        </Form>
    );
}
