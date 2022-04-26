import React from "react";
import styles from "./RentMap.module.scss";

export default function RentMap() {
    return (
        <div className="position-relative">
            <div className={`mx-auto ${styles["buy-body"]}`}>
                <h3 className="text-primary text-center fw-bold px-5 px-md-0">
                    Find your new hope today.
                </h3>
                <div className="mt-5 text-center">
                    <img
                        src="/assets/images/US map.png"
                        className="img-fluid mx-5"
                        alt=""
                    />
                </div>
                <div className="text-center mt-5 pt-5">
                    <form className="mx-auto">
                        <input
                            type="text"
                            className="px-2 fs-5 me-2"
                            placeholder="Seach by Address, City, Zip Code, etc."
                        />
                        <button className="bg-pink fs-4 border-0 px-3 py-1 text-white">
                            SEARCH
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
