import React from "react";
import styles from "./AboutTruStory.module.scss";

const AboutTrustory = () => {
    return (
        <div
            className={`container position-relative px-md-5 mx-auto py-5 ${styles["about-truStory"]}`}
        >
            <div className="row gx-5">
                <div className="col-6 d-flex justify-content-end">
                    <div className={`my-5 pt-5`}>
                        <img
                            src="/assets/images/Group 220.png"
                            className={`img-fluid ${styles["image"]}`}
                            width="80%"
                            alt=""
                        />
                    </div>
                </div>
                <div className="col-6">
                    <div className="col-6">
                        <div className={`${styles["trastory-box-2"]}`}>
                            <div
                                className={`bg-primary text-white ${styles["trastory-child"]} p-5`}
                            >
                                <div className="d-flex">
                                    <h1 className="fw-bold">#TruStory</h1>
                                    <div>
                                        <img
                                            src="/assets/love.png"
                                            className="img-fluid ms-3 mt-4"
                                            width="80%"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <h2 className="text-white fw-normal mt-3 top-0">
                                    Jim jones
                                </h2>
                                <h3 className="fw-normal mt-3">
                                    TRU Realty Client
                                </h3>
                                <p className="mt-5 fw-normal">
                                    I purchased my house and used Tru Realty and
                                    couldn’t be happier with the results. My
                                    agent, Sarah Richardson was well-versed in
                                    the neighborhoods I was interested in,
                                    showed me several options, and fought for me
                                    every step of the way with a relentless
                                    seller. I have recommended them to several
                                    other potential buyers and sellers and would
                                    do so several times over! -Jim Jones
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutTrustory;
