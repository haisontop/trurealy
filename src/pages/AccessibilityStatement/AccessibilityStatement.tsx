import React, { useState } from "react";
import Layout from "../../layouts";
import "./AccessibilityStatement.scss";

function AccessibilityStatement(props: any) {
    return (
        <Layout>
            <section className="AccessibilityStatementPageWrap">
                <h1>ACCESSIBILITY STATEMENT</h1>
                <h2>ACCESSIBILITY ASSISTANCE</h2>
                <p>
                    If you need assistance accessing – or have any other
                    concerns about the accessibility of – our websites and
                    mobile applications, please contact one of our
                    representatives at{" "}
                    <a href="mailto:admin@trurealty.com">admin@trurealty.com</a>{" "}
                    or <a href="tel:1-855-242-88789">1-855-242-88789</a> and we
                    will work with you to provide the information you need. For
                    those who are deaf or hard of hearing, or who do not use
                    voice channels to communicate, please contact us via email
                    or via 711 or other relay services.
                </p>
                <h2>GOAL OF ACCESSIBILITY FOR ALL</h2>
                <p>
                    We desire to provide a positive experience to all
                    stakeholders, and we aim to promote accessibility and
                    inclusion. Our goal is to enable our users to successfully
                    gather information through our websites and mobile
                    applications.
                </p>
                <p>
                    Whether you are using assistive technologies like a screen
                    reader, a magnifier, voice recognition software, or captions
                    for videos, our goal is to make your use of our technology a
                    successful and enjoyable experience.
                </p>
                <h2>ACTIONS</h2>
                <p>
                    We are actively taking a variety of steps and devoting
                    resources to further enhance the accessibility of our
                    websites, mobile applications, and other technology
                    platforms, including using the W3C WAI Web Content
                    Accessibility Guidelines (WCAG) 2.0 Level AA success
                    criteria.
                </p>
                <h2>ONGOING EFFORT</h2>
                <p>
                    Although we are proud of the efforts that we have completed
                    and that are in-progress, we view accessibility as an
                    ongoing effort.
                </p>
                <h2>FEEDBACK</h2>
                <p>
                    Please contact us at{" "}
                    <a href="mailto:admin@trurealty.com">admin@trurealty.com</a>{" "}
                    or <a href="tel:480-327-6700">480-327-6700</a> if you have
                    any feedback or suggestions as to how we could improve the
                    accessibility of our websites, mobile applications, and
                    other technology platforms.
                </p>
            </section>
        </Layout>
    );
}

export default AccessibilityStatement;
