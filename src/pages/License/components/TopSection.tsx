import React from "react";
import "../License.scss";

export default function TopSection() {
    return (
        <div>
            <div className="main-Header ">
                <div className="halfBottomCircle grad ">
                    <h3>BUILD SMARTER</h3>
                    <h1>SCALE FASTER</h1>
                    <p>
                        Smart Agents scale their business faster with our
                        emerging technology and superior educational platform.
                    </p>
                </div>
                <div className="col-12 col-md-6 m-auto topCard">
                    <img src="/img/whats-in-it-for-you-thumbnail.png" alt="" />
                </div>
            </div>
        </div>
    );
}
