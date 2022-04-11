import styles from "./TextBanner.module.scss";

type TextBannerProps = {
    className?: string;
    title?: string;
    description?: string;
};

const TextBanner = ({ className, title, description }: TextBannerProps) => {
    return (
        <div className={`${styles["join-us-bottom-header"]}`}>
            <div
                className={`${styles["join-us-bottom-header-content"]} bg-primary`}
            >
                <div className="text-white fs-2">
                    SMARTER AGENTS. UNPARALLELED EXPERIENCES.
                </div>
                <div className="text-white fs-5 mt-5">
                    Transformational Technology, Training And Transparency That
                    Creates Smarter Agents And Unparalleled Experiences.
                </div>
            </div>
        </div>
    );
};

export default TextBanner;
