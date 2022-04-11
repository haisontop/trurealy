export type Item = {
    image?: string;
    title?: string;
    description?: string;
};

type BannerTextProps = {
    title?: string;
    description?: string;
};

type BannerProps = {
    className?: string;
    data?: Item[] | Item;
};

const Banner = ({ className, data }: BannerProps) => {
    const BannerText = ({ title, description }: BannerTextProps) => {
        return (
            <div className="position-absolute banner-cols text-white w-100 px-5 pt-4">
                <hr style={{ width: "35%", height: "3px" }} className="mb-3" />
                <h2 className="fw-bolder">{title}</h2>
                <p className="mt-4 fs-5">{description}</p>
            </div>
        );
    };
    return (
        <div className="container banner-full-height px-0">
            <div className="row no-gutters h-100">
                {Array.isArray(data) ? (
                    data.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="col-6 overflow-hidden px-0 h-100 position-relative banner-col-parents"
                                style={{
                                    background: `url(${item.image}) no-repeat top left`,
                                    backgroundSize: "cover",
                                }}
                            >
                                <BannerText
                                    title={item.title}
                                    description={item.description}
                                />
                            </div>
                        );
                    })
                ) : (
                    <div
                        className="col-12 overflow-hidden px-0 h-100 position-relative banner-col-parents"
                        style={{
                            background: `url(${data?.image}) no-repeat top left`,
                            backgroundSize: "cover",
                        }}
                    >
                        <BannerText
                            title={data?.title}
                            description={data?.description}
                        />
                    </div>
                )}
            </div>
            <div className="row">
                <div className="col-12 px-0">
                    <div className="gradient-divider" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
