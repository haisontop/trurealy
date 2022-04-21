import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
const Footer = () => {
  return (
    <div className="container mt-5 pt-5 mb-4 ">
      <div className={`row gx-0 bg-white text-primary gx-4 gy-4`}>
        <div className="col-12 col-md-5 col-lg-3">
          <div>
            <h5 className="fw-bold">CORPORATE HEAQUARTERS</h5>
            <p className="my-0">7373 N Scottsdale Rd A100</p>
            <p className="my-0">Scottsdale, AZ 85253</p>
          </div>
          <div className="my-4">
            <p className="my-0">480-327-6700</p>
            <p className="my-0">M-F 8am-5pm</p>
          </div>
          <div className="mt-3 mt-lg-5 pt-0 pt-lg-4 pb-4 pb-lg-0">
            <img
              src="/assets/Realtor equal housing opportunity-BLK.png"
              width="150px"
              alt=""
            />
          </div>
        </div>
        <div className="col-6 col-md-3 col-lg-2">
          <ul style={{ listStyle: "none", textDecoration: "none" }} className="ps-0">
            <li>
              <Link to="/building-blox-podcast" style={{ textDecoration: "none" }}>
                <span className="footer-list">Building Box prodcust</span>
              </Link>
            </li>
            <li>
              <Link to="/" style={{ textDecoration: "none" }}>
                <span className="footer-list">Careers at Tru</span>
              </Link>
            </li>
            <li>
              <Link to="/consumer/givingback" style={{ textDecoration: "none" }}>
                <span className="footer-list">Giving Back</span>
              </Link>
            </li>
            <li>
              <Link to="/" style={{ textDecoration: "none" }}>
                <span className="footer-list">Agent Equity</span>
              </Link>
            </li>
            <li>
              <Link to="/" style={{ textDecoration: "none" }}>
                <span className="footer-list">Agent Influencer</span>
              </Link>
            </li>
            <li>
              <Link to="/" style={{ textDecoration: "none" }}>
                <span className="footer-list">Rev Share</span>
              </Link>
            </li>
            <li>
              <Link to="/" style={{ textDecoration: "none" }}>
                <span className="footer-list">Learn & Earn</span>
              </Link>
            </li>
            <li>
              <Link to="/" style={{ textDecoration: "none" }}>
                <span className="footer-list">Social Feed</span>
              </Link>
            </li>
            <li>
              <Link to="/in-the-press" style={{ textDecoration: "none" }}>
                <span className="footer-list">In The Press</span>
              </Link>
            </li>
            <li>
              <Link to="/blog" style={{ textDecoration: "none" }}>
                <span className="footer-list">Blog</span>
              </Link>
            </li>
            <li>
              <Link to="/refund-policy" style={{ textDecoration: "none" }}>
                <span className="footer-list">Refund Policy</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <ul style={{ listStyle: "none", textDecoration: "none" }} className="ps-0">
            <li>
              <Link to="/privacy-policy" style={{ textDecoration: "none" }}>
                <span className="footer-list">Privacy Policy</span>
              </Link>
            </li>
            <li>
              <Link to="/terms-of-service" style={{ textDecoration: "none" }}>
                <span className="footer-list">Terms of Service</span>
              </Link>
            </li>
            <li>
              <Link to="/DMCA-notice" style={{ textDecoration: "none" }}>
                <span className="footer-list">DMCA Notice</span>
              </Link>
            </li>
            <li>
              <Link to="/cookie-policy" style={{ textDecoration: "none" }}>
                <span className="footer-list">Cookie Policy</span>
              </Link>
            </li>
            <li>
              <Link to="/" style={{ textDecoration: "none" }}>
                <span className="footer-list">Sitemap</span>
              </Link>
            </li>
            <li>
              <Link to="/accessibility-statement" style={{ textDecoration: "none" }}>
                <span className="footer-list">Accessibility Statement</span>
              </Link>
            </li>
            <li>
              <Link to="/fair-housing-statement" style={{ textDecoration: "none" }}>
                <span className="footer-list">Fair Housing Statement</span>
              </Link>
            </li>
            <li>
              <Link to="/MLS-compliance-statements" style={{ textDecoration: "none" }}>
                <span className="footer-list">MLS Compliance Statements</span>
              </Link>
            </li>
            <li>
              <Link to="/" style={{ textDecoration: "none" }}>
                <span className="footer-list">
                  New York Fair Housing Statement
                </span>
              </Link>
            </li>
            <li>
              <Link to="/" style={{ textDecoration: "none" }}>
                <span className="footer-list">
                  Texas Consumer Protection Notice
                </span>
              </Link>
            </li>
            <li>
              <Link to="/" style={{ textDecoration: "none" }}>
                <span className="footer-list">
                  Texas Commission Information
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-12 col-lg-4 ps-3" style={{ fontSize: "11px" }}>
          <p>
            TRU, TRU Realty, the TRU Realty logo, and other various trademarks,
            logos, designs, and slogans are the registered and unregistered
            trademarks of TRU Realty, LLC., dba TRU Realty in the U.S. and/or
            other countries.
          </p>
          <p style={{ fontSize: "11px" }}>
            Corporate Responsibility, Privacy & Legal Notices: TRU Realty (TRU
            Realty LLC) is a licensed real estate broker authorized to conduct
            business as Realty By TRU LLC in NY, and TRU Brokerage LLC in TX,
            FL, GA and NC. California License #9908433. No guarantee, warranty
            or representation of any kind is made regarding the completeness or
            accuracy of descriptions or measurements (including square footage
            measurements and property condition), such should be independently
            verified, and TRU Realty expressly disclaims any liability in
            connection therewith. No financial or legal advice provided. Equal
            Housing Opportunity. © TRU Realty 2022.
          </p>
          <div className="text-primary mt-3">
            <Link to="/">
              <span className="me-3 p-1 border border-1 border-primary rounded-circle">
                <FaFacebookF size="16" />
              </span>
            </Link>
            <Link to="/">
              <span className="me-3 p-1 border border-1 border-primary rounded-circle">
                <FaInstagram size="16" className="mb-1" />
              </span>
            </Link>
            <Link to="/">
              <span className="me-3 p-1 border border-1 border-primary rounded-circle">
                <FaYoutube size="16" className="mb-1" />
              </span>
            </Link>
            <Link to="/">
              <span className="me-3 p-1 border border-1 border-primary rounded-circle">
                <GrLinkedinOption size="16" className="mb-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
