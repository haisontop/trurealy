import Banner, { Item as BannerItemType } from "../../../components/Banner";
import Layout from "../../../layouts";
import { Col, Container } from "react-bootstrap";
import TextBanner from "../../../components/TextBanner";
import classnames from "classnames";
import cls from "./Home.module.scss";
export const Home = () => {
    const dummyData: BannerItemType = {
        image: "/assets/agent1.png",
        title: "Become a better agent at tru",
        description:
            "Belong to a diverse group of tech-centric agents scaling their businesses faster than the competition.",
    };
    return (
        <Layout>
            <Container className={classnames(cls.container, "px-0")}>
                <Banner data={dummyData} />
                <Col className={cls.textBannerContainer}>
                    <TextBanner />
                </Col>
                <Col className={cls.textWrapper}>
                    <h2>Welcome Home</h2>
                    <p>
                        At TRU Realty, our mission is to create a diverse and
                        inclusive culture focused on training and education,
                        coupled with innovative technology, in order to provide
                        an unparalleled level of service to our agents and the
                        communities we serve.
                    </p>
                </Col>
                <Col className={cls.textBannerContainer}>
                    <TextBanner />
                </Col>
                <Col className={cls.textWrapper}>
                    <h2>
                        CLOSE TRANSACTIONS QUICKLY & SECURELY WITH OUR
                        CUTTING-EDGE TRANSACTION MANAGEMENT
                    </h2>
                </Col>
            </Container>
        </Layout>
    );
};
