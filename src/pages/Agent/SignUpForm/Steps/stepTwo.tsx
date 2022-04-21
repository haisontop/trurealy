import React from 'react'
import { FormSelect, ProgressBar } from 'react-bootstrap';
import SideBar from '../../../../components/SideBar';

export default function Agent2({onSubmit, onPrevious}:any) {
    const now = 100;
  return (
			<div className="NewAgentSection">
				<div className="container-fluid Agentmain">
					<div className="row">
						<div className="col-lg-9 col-md-12 col-12 allAgentmain g-0">
							<div className="agentTitle">
								<h1>New Agent sign up</h1>
								<p>Welcome to TRU Realty. Ready to get started? Please fill out the form below.</p>
							</div>
							<div className="mainagentbox">
								<label className="agentstep">Step 2 of 2</label>
								<div className="agentProgess">
									<ProgressBar now={now} label={`${now}%`} />;
								</div>
								<div className="agentSign">
									<p className="agentname">
										Are You Currently Licensed ? <span>(Required)</span>
									</p>
								</div>
								<div className="agentSelect">
                                    <div className="agentYes">
                                        <input type="radio" value="Yes" />
                                        <label>Yes</label>
                                    </div>
                                    <div className="agentNo agentYes">
                                        <input type="radio" value="No" />
                                        <label>No</label>
                                    </div>
                                </div>

								<div className="row">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="agentSign agentaddress">
                                            <p className="agentname agentnamestepthree">
                                                What State Are You Looking To Be <br /> Licensed To Sell Reel Estate in ?
                                            </p>
                                        </div>
										<div className="firstName">
                                        <FormSelect aria-label="Default select example">
                                            <option>Indeed</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </FormSelect>
										</div>
									</div>
									<div className=" col-lg-6 col-md-12">
                                        <div className="agentSign agentaddress">
                                            <h3>When Do You Want To Start Selling</h3>
                                            <p className="agentname">
                                                Real Estate<span>(Required)</span>
                                            </p>
								        </div>
										<div className="firstName firstDate stepDate">
                                            <input type="date" id="birthday" name="birthday" />
										</div>
									</div>
								</div>
								<div className="agentSign agentaddress">
									<p className="agentname">
										How Did You Hear About Us ?<span>(Required)</span>
									</p>
								</div>
								<div className="row">
									<div className="col-md-12">
										<div className="firstName secondStepdown">
                                        <FormSelect aria-label="Default select example">
                                            <option>Indeed</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </FormSelect>
										</div>
									</div>
								</div>
                                <div className="agentSign">
									<p className="agentname">
										Are You Ready To Start Your Career With Tru Realty ?<span>(Required)</span>
									</p>
								</div>
								<div className="agentSelect">
                                    <div className="agentYes">
                                        <input type="radio" value="Yes" />
                                        <label>Yes, I'am ready to begin</label>
                                    </div>
                                    <div className="agentNo agentYes">
                                        <input type="radio" value="No" />
                                        <label>No, I need more information</label>
                                    </div>
                                </div>
								<div className="row">
                                    <div className="Nextbtn">
                                        <button type="submit" className="agentPrevious" onClick={onPrevious}>Previous</button>
                                        <button type="submit"onClick={onSubmit}>Continue</button>
                                    </div>
								</div>
							</div>
						</div>
					<SideBar />
					</div>
				</div>
			</div>
  )
}
