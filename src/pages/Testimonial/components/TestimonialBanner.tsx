import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const renderDotsItem = ({ isActive }: { isActive: boolean }) => {
  return isActive ? (
    <div
      className="mx-2 w-20 border-white"
      style={{
        height: "20px",
        width: "20px",
        borderRadius: "20px",
        backgroundColor: "#A6A4CF",
      }}
    ></div>
  ) : (
    <div
      className="mx-2 w-8"
      style={{
        height: "20px",
        width: "20px",
        borderRadius: "20px",
        border: "2px solid #929292",
      }}
    ></div>
  );
};

const TestimonialBanner = () => {
  const handleDragStart = (e: any) => e.preventDefault();
  const items = [
    <img
      src="/assets/Rectangle 303.png"
      className="img-fluid"
      width="100%"
      onDragStart={handleDragStart}
    />,
    <img
      src="/assets/placeholder.png"
      className="img-fluid"
      width="100%"
      onDragStart={handleDragStart}
    />,
    <img
      src="/assets/Rectangle 303.png"
      className="img-fluid"
      width="100%"
      onDragStart={handleDragStart}
    />,
  ];
  return (
    <div className="container mx-auto overflow-hidden mt-5">
      <div
        className="mb-5 mx-auto"
        style={{ borderBottom: "2px solid black", maxWidth: "900px" }}
      >
        <h1 className="fs-1 fw-normal text-center text-black text-uppercase">
          Real people. Tru stories.
        </h1>
      </div>
      <div className="mx-auto" style={{ maxWidth: "900px" }}>
        <AliceCarousel
          renderKey={0}
          mouseTracking
          items={items}
          renderDotsItem={renderDotsItem}
          disableButtonsControls={true}
          controlsStrategy="responsive"
          autoPlayInterval={20}
          animationType="slide"
          autoPlayDirection="ltr"
          responsive={{
            0: {
              items: 1,
            },
            1700: {
              items: 1,
            },
          }}
        />
      </div>
    </div>
  );
};

export default TestimonialBanner;