import React from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import ConsumerTestimonialCard from "./TestimonialCard";

const FEEDS = [
  {
    name: "A",
    description:
      "I cannot say enough good things about TRU Realty. I decided to work with Sarah Kirsch Richardson because her knowledge of the market was immediately obvious. I was especially impressed with her ability to listen and understand my unique needs and present not just one, but several options that worked perfectly for me. When you walk into the TRU Realty offices you instantly get a sense of their commitment to delivering best in class service. I’d recommend them to anyone.-Krysta Dos Santos",
    imageURL: "/assets/images.png",
  },
  {
    name: "B",
    description: "This is Test content",
    imageURL: "/assets/social.png",
  },
  {
    name: "C",
    description: "This is Test content",
    imageURL: "/assets/images.png",
  },
];

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

const TestimonialMiddle = () => {
  const items = FEEDS.map((feed) => (
    <ConsumerTestimonialCard key={feed.name} content={feed.description} />
  ));

  return (
    <div className="container mx-auto overflow-hidden mt-5">
      <div className="mx-auto" style={{ maxWidth: "900px" }}>
        <AliceCarousel
          renderKey={0}
          items={items}
          disableButtonsControls={true}
          renderDotsItem={renderDotsItem}
          controlsStrategy="responsive"
          autoPlayInterval={20}
          animationType="slide"
          autoPlayDirection="ltr"
          mouseTracking
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

export default TestimonialMiddle;
