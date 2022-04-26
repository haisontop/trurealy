import React from "react";
import styles from "./GivingBackMiddle.module.scss";

function GivingBackMiddle() {
    return (
        <div className="p-1 p-md-5">
            <div className="row align-items-center p-5">
                <div className="col-12 col-md-6 position-relative px-0">
                    <div
                        className={`position-absolute w-100 h-100 ${styles["box"]}`}
                    />
                    <img
                        src="/img/51.png"
                        alt=""
                        className="w-100 h-auto rounded-fill "
                    />
                </div>
                <div className="col-12 col-md-6 px-0">
                    <p className="text-end fw-bolder text-uppercase mb-0 pe-3 display-1 text-primary">
                        Giving Back
                    </p>
                    <div
                        className={`p-5 text-white h4 ${styles["giving-text"]}`}
                    >
                        Here at TRU, we love giving back and we have fun doing
                        it! Our agents serve their communities by giving their
                        time, talent and donations in ways only local experts
                        know how. Take these photos for example, TRU agents and
                        employees alike partnered with “Feed My Starving
                        Children”, a non-profit dedicated to providing
                        nutritionally complete meals specifically formulated for
                        malnourished children. Go ahead, zoom in and see for
                        yourself how fun giving back can be.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GivingBackMiddle;
