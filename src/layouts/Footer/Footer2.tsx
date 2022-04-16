import React from 'react';
// import Image from 'next/image';
import Facebook from '../../assets/image/Path 79.png';
import Instagram from '../../assets/image/Path 81.png';
import Youtube from '../../assets/image/Path 82.png';
import linkedin from '../../assets/image/Path 80.png';
import housing from '../../assets/image/housing.png';

function Footer() {
	return (
		<div>
			<div className="FooterMain agentFooter">
				<div className="row g-0">
					<div className="col-lg-3 col-md-6">
						<div className="FooterCorporate">
							<h3>Corporate Headquarters</h3>
							<h4>7373 N Scottsdale Rd A100 Scottsdale, AZ 85253</h4>
							<p>480-327-6700 M-F 8am-5pm</p>
						</div>
						<div className="footerLogo"><img src={housing} className="chat-img" /></div>
					</div>
					<div className="col-lg-2 col-md-6">
						<div className="FooterBuilding">
							<ul>
								<li>
									<a href="#">Building Blox Podcast</a>
								</li>
								<li>
									<a href="#">Careers at Tru</a>
								</li>
								<li>
									<a href="#">Giving Back</a>
								</li>
								<li>
									<a href="#">Social Feed</a>
								</li>
								<li>
									<a href="#">In The Press</a>
								</li>
								<li>
									<a href="#">Blog</a>
								</li>
								<li>
									<a href="#">Refund Policy</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="FooterBuilding">
							<ul>
								<li>
									<a href="#">Privacy Policy</a>
								</li>
								<li>
									<a href="#">Terms of Service</a>
								</li>
								<li>
									<a href="#">DMCA Notice</a>
								</li>
								<li>
									<a href="#">Cookie Policy</a>
								</li>
								<li>
									<a href="#">Sitemap</a>
								</li>
								<li>
									<a href="#">Accessibility Statement</a>
								</li>
								<li>
									<a href="#">Fair Housing Statement</a>
								</li>
								<li>
									<a href="#">MLS Compliance Statements</a>
								</li>
								<li>
									<a href="#">New York Fair Housing Statement</a>
								</li>
								<li>
									<a href="#">Texas Consumer Protection Notice</a>
								</li>
								<li>
									<a href="#">Texas Commission Information</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<ul className="footermedia">
							<p>
								TRU, TRU Realty, the TRU Realty logo, and other various trademarks, logos, designs, and
								slogans are the registered and unregistered trademarks of TRU Realty, LLC., dba TRU
								Realty in the U.S. and/or other countries.
							</p>
							<p>
								Corporate Responsibility, Privacy & Legal Notices: TRU Realty (TRU Realty LLC) is a
								licensed real estate broker authorized to conduct business as Realty By TRU LLC in NY,
								and TRU Brokerage LLC in TX, FL, GA and NC. California License #9908433. No guarantee,
								warranty or representation of any kind is made regarding the completeness or accuracy of
								descriptions or measurements (including square footage measurements and property
								condition), such should be independently verified, and TRU Realty expressly disclaims
								any liability in connection therewith. No financial or legal advice provided. Equal
								Housing Opportunity. © TRU Realty 2022.
							</p>
							<li>
								<a>
									<img src={Facebook} className="chat-img" />
								</a>
							</li>
							<li>
								<a>
									<img src={Instagram} className="chat-img" />
								</a>
							</li>
							<li>
								<a>
									<img src={Youtube} className="chat-img" />
								</a>
							</li>
							<li>
								<a>
									<img src={linkedin} className="chat-img" />
								</a>
							</li>
							<p>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="205"
									height="75"
									viewBox="0 0 205 75"
								>
									<p
										id="Realtor_equal_housing_opportunity_logos"
										data-name="Realtor &amp; equal housing opportunity logos"
										// width="205"
										// height="75"
									/>
								</svg>
							</p>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
