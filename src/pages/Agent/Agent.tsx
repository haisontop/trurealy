import React from 'react';
import { Navbar, ProgressBar } from 'react-bootstrap';
import Navigation from '../../layouts/Navigation';
import engy from '../../assets/image/engy.png';
import Footer2 from '../../layouts/Footer/Footer2';
import { useNavigate } from 'react-router-dom';
export default function Agent() {
	let navigate=useNavigate()
	const now = 50;
	return (
		<div className="MainAgentpage">
			<Navigation />
			<div className="NewAgentSection">
				<div className="container-fluid Agentmain">
					<div className="row">
						<div className="col-lg-9 col-md-9 col-12 allAgentmain g-0">
							<div className="agentTitle">
								<h1>New Agent sign up</h1>
								<p>Welcome to TRU Realty. Ready to get started? Please fill out the form below.</p>
							</div>
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
										Enter Your Legal name as it would appear on your Real Estate License
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
										Personal Enail Address<span>(Required)</span>
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
											<button type="submit" onClick={()=>navigate("/agent/step1")} >Next</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-3 g-0 agentsidebarsection">
							<div className="agentSidebar">
								<div className="sidebarsection">
									<div className="sidebar_chat">
										<img src={engy} className="chat-img" />
										<p>Hi there! Welcome to Tru Realty. How can I assist you today?</p>
									</div>
									<div className="agentsidehalp">
										<div className="helptitle">
											<p>Need halp? Start typing!</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer2 />
		</div>
	);
}
