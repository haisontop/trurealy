import React from "react";
import { Row, Col } from "react-bootstrap";

interface TechHelpProps {
    title: String;
    children: React.ReactNode;
}

export const TechHelp = (props: TechHelpProps) => {
    const { title, children } = props;
    return (
        <>
            <Row>
                <section className="cta-sec text-center">
                    <Row>
                        <Col sm={12}>
                            <h1 className="inner-title">{title}</h1>
                            <div className="links">
                                {children}
                               
                            </div>
                        </Col>
                    </Row>
                </section>
            </Row>
        </>
    );
};
