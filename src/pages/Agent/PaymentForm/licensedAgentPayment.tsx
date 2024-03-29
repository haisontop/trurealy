import React from 'react'
import Navigation from '../../../layouts/Navigation';
import Footer2 from "../../../layouts/Footer/Footer2";
import SideBar from '../../../components/SideBar';
import incone from "../../../assets/image/inc-5000-logo.png";
import imman from "../../../assets/image/inman-logo.png";
import business from "../../../assets/image/business-journal-logo.png";
import naor from "../../../assets/image/naor-logo.png";
import rise from "../../../assets/image/rismedia-logo.png";
import chime from "../../../assets/image/chime-logo.png";

export default function step9({ onSubmit }: any) {
    return (
        <div className='agentpage_section agent'>
            <div className='container-fluid agentbody'>
                <div className='row'>
                    <div className='col-md-12 agentleftsection  g-0'>
                        <div className='leftSection'>
                            <div className='toptital'>
                                Featured In
                            </div>
                            <div className='agentlogosection'>
                                <div className='agentlogos'>
                                    <img src={incone} className="chat-img" alt=""/>
                                </div>
                                <div className='agentlogos'>
                                    <img src={imman} className="chat-img" alt=""/>
                                </div>
                                <div className='agentlogos'>
                                    <img src={business} className="chat-img" alt=""/>
                                </div>
                                <div className='agentlogos'>
                                    <img src={naor} className="chat-img" alt=""/>
                                </div>
                                <div className='agentlogos'>
                                    <img src={chime} className="chat-img" alt=""/>
                                </div>
                                <div className='agentlogos'>
                                    <img src={rise} className="chat-img" alt=""/>
                                </div>
                            </div>
                            <div className='newstepTitle'>
                                <h1>BILLING INFO</h1>
                            </div>
                            <div className='row'>
                                <div className='infotitle'>
                                    <h2>Name <span>(Required)</span></h2>
                                </div>
                                <div className='col-md-6 col-12'>
                                    <div className='nameinput'>
                                        <input type="text" />
                                        <label>First</label>
                                    </div>
                                </div>
                                <div className='col-md-6 col-12'>
                                    <div className='nameinput'>
                                        <input type="text" />
                                        <label>Last</label>
                                    </div>
                                </div>
                                <div className='infotitle'>
                                    <h2>Email <span>(Required)</span></h2>
                                    <h5>Use Previous email when you first inquired for more infomation</h5>
                                </div>
                                <div className='col-12'>
                                    <div className='nameinput'>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className='infotitle'>
                                    <h2>Phone <span>(Required)</span></h2>
                                </div>
                                <div className='col-12'>
                                    <div className='nameinput newinput'>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className='infotitle'>
                                    <h2>Address <span>(Required)</span></h2>
                                </div>
                                <div className='col-12'>
                                    <div className='nameinput newinput'>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className='infotitle'>
                                    <h2>Street Address</h2>
                                </div>
                                <div className='col-12'>
                                    <div className='nameinput newinput'>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className='infotitle'>
                                    <h2>Address Line 2</h2>
                                </div>
                                <div className='col-md-6 col-12'>
                                    <div className='nameinput newinput'>
                                        <input type="text" />
                                        <label>City</label>
                                    </div>
                                </div>
                                <div className='col-md-6 col-12'>
                                    <div className='nameinput newinput'>
                                        <input type="text" />
                                        <label>State / Province / Region</label>
                                    </div>
                                </div>
                                <div className='col-md-6 col-12'>
                                    <div className='nameinput newinput'>
                                        <input type="text" />
                                        <label>Zip / Postal Code</label>
                                    </div>
                                </div>
                            </div>
                            <div className='newstepTitle academytitle'>
                                <h1>SIGN-ON FEE PAYMENT</h1>
                            </div>
                            <div className='academycheck_title'>
                                <label>Seasoned Agent Sign On Fee<span>*</span></label>
                            </div>
                            <div className='acadamyCheck'>
                                <div className='checkclick'>
                                    <input type="radio" />
                                    <label>1 payment - $299</label>
                                </div>
                            </div>


                            <div className='row'>
                                <div className='infotitle'>
                                    <h2>Terms And Condition Agreement <span>(Required)</span></h2>
                                </div>
                                <div className='acadamyCheck'>
                                    <div className='checkclick Newcheckclick'>
                                        <input type="checkbox" />
                                        <label>I agree to the terms and condition & I agree to be charged $299.</label>
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <div className='agentconatin_lorem'>
                                        <p>You hereby acknowledge and agree to a one-time charge of $699 for the
                                            fundamentals and academy training, tech stack set up and onboarding.A
                                            recurring payment of $99/mo for tech stack will be auto-debited from the
                                            credit card provided.</p>
                                        <label>After payment, onboarding docs will be sent to you via email, please check your inbox.</label>
                                    </div>
                                </div>
                                <div className='infotitle'>
                                    <h2>Have You Been Convicted Of A Felony Or A Misdemeanor?<span>(Required)</span></h2>
                                </div>
                                <div className='acadamyCheck'>
                                    <div className='checkclick'>
                                        <input type="checkbox" />
                                        <label>Yes</label>
                                    </div>
                                    <div className='checkclick'>
                                        <input type="checkbox" />
                                        <label>No</label>
                                    </div>
                                    <div className='checkclick'>
                                        <input type="checkbox" />
                                        <label>I am currently awaiting trial</label>
                                    </div>
                                </div>
                                <div className='infotitle'>
                                    <h2>Did You Speak With One Of Our Career Advisord?</h2>
                                </div>
                                <div className='acadamyCheck'>
                                    <div className='checkclick'>
                                        <input type="checkbox" />
                                        <label>Yes</label>
                                    </div>
                                    <div className='checkclick'>
                                        <input type="checkbox" />
                                        <label>No</label>
                                    </div>
                                </div>
                                <div>
                                    <h5>Who Did You Speak With?</h5>
                                </div>
                                <div className='col-md-12'>
                                    <div className='nameinput newinput'>
                                    <select className="form-select inputdown" aria-label="Default select example">
                                        <option selected>Lauren Dowdy</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    </div>
                                </div>
                                <div className='agenat_btn'>
                                    <button onClick={onSubmit}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                    </div>
                </div>
            </div>
        </div>
    )
}
