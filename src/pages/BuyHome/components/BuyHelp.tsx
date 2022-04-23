import React from "react";
import { Row, Col } from "react-bootstrap";

interface BuyHelpProps {
    title: String;
    children: React.ReactNode;
}

export const BuyHelp = (props: BuyHelpProps) => {
    const { title, children } = props;
    return (
        <>
           
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
           
        </>
    );
};
