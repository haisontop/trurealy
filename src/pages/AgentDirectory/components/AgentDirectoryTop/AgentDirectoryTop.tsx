import React from "react";
import style from "./AgentDirectory.module.scss";

function AgentDirectoryTop() {
    return (
        <div className={style["agent-directory-top"]}>
            <div className={`${style["top-text"]}`}>
                <h1 className="text-center fw-bold text-white">
                    HERE FOR YOU. HAPPY TO HELP.
                </h1>
            </div>
            <form className="gap-5 d-md-flex px-5">
                <div className="w-100">
                    <input
                        type="text"
                        placeholder="Search by Agent Name"
                        className="px-3 py-2 fs-4 text-primary"
                    />
                </div>
                <div className="w-100 my-3 my-md-0">
                    <input
                        type="text"
                        placeholder="Seach by Address, City, Zip Code, etc."
                        className="px-3 py-2 fs-4 text-primary"
                    />
                </div>
                <div className="text-center text-md-start">
                    <button className="fs-5 px-3 py-1 border-0 bg-pink text-white">
                        SEARCH
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AgentDirectoryTop;
