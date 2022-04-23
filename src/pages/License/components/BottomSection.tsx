import React from "react";

export default function BottomSection() {
    return (
        <div>
            <div className="grad p-2"></div>
            <div className="bg-primary text-center py-5 ">
                <div className="container mx-auto text-white">
                    <h1>
                        Still have a few questions? <br /> Schedule a meeting!
                    </h1>
                    <div>
                        <button
                            className="bg-pink px-5 text-white fs-4 fw-normal le py-2 me-2 border-0 mt-3"
                            style={{ borderRadius: "10px" }}
                        >
                            Contact Us
                        </button>
                        <button
                            className="bg-pink px-5 text-white fs-4 fw-normal le py-2 border-0 mt-3"
                            style={{ borderRadius: "10px" }}
                        >
                            See our FAQ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
