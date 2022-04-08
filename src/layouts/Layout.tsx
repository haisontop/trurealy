import React from "react";
import { Container } from "react-bootstrap";
import { AiOutlineAlignRight, AiFillCaretRight } from "react-icons/ai";
import Footer from "./Footer";
import Navigation from "./Navigation";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <Navigation />
      <main>
        <div className="px-0">
          <div className="d-flex">
            <div className="px-0 flex-grow-1">{props.children}</div>
            <div
              className="position-relative px-0"
              style={{ minWidth: "300px" }}
            >
              {/* =========== sticy sidebar ========= */}
              <div className="position-sticky w-100 end-0 py-3  shadow-sm top-0 bottom-0">
                <div className="">
                  <div className="text-primary-gray px-3">
                    <h1 className="fw-normal">Sticky sidebar</h1>
                    <p className="fs-6 font-light">
                      Bot follows your mouse. <br />
                      Has a face (personify the bot) <br />
                      Ask questions as your mouse <br />
                      hovers over topics
                    </p>
                  </div>
                  <div style={{ height: "100vh" }}></div>
                  <div className="py-2 border border-3 border-end-0 border-start-0 border-primary-gray px-3 d-flex position-sticky bottom-0">
                    <input
                      placeholder="Need help? Start typing!"
                      type="text"
                      className="text-primary massage-input pb-1 border-2 border-top-0 border-end-0 border-start-0 border-primary-gray w-100  text-end"
                    />
                    <button className="bg-white border-0 text-primary-gray">
                      <AiFillCaretRight size="20" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
