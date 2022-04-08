import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styles from "./SocialCarousel.module.scss";

const SOCIAL_FEEDS = [
  {
    name: "King-Kong",
    role: "programmer",
    avatarURL: "/assets/social.png",
  },
  {
    name: "King-Kong",
    role: "programmer",
    avatarURL: "/assets/social.png",
  },
  {
    name: "King-Kong",
    role: "programmer",
    avatarURL: "/assets/social.png",
  },
];

const handleDragStart = (event: any) => event.preventDefault();

const renderDotsItem = ({ isActive }: { isActive: boolean }) => {
  return isActive ? (
    <div
      className="mx-2 w-20 bg-white border-white"
      style={{ height: "20px", width: "20px", borderRadius: "20px" }}
    ></div>
  ) : (
    <div
      className="mx-2 w-8 border border-white"
      style={{ height: "20px", width: "20px", borderRadius: "20px" }}
    ></div>
  );
};

interface SocialCardProps {
  onDragStart: (event: any) => void;
  imageURL: string;
  title: string;
  description: string;
}

const SocialCard = (props: SocialCardProps) => {
  const { onDragStart, imageURL, title, description } = props;

  return (
    <div
      className={`flex cursor-pointer flex-col gap-y-2 p-4 bg-white rounded rounded-4`}
      onDragStart={onDragStart}
    >
      <div className="">
        <img
          src={imageURL}
          height="100%"
          width="100%"
          className="absolute bottom-0 object-cover"
          alt="social"
        />
      </div>
      <div className="text text-primary fs-6">View more on instgram</div>
    </div>
  );
};

export const SocialCarousel = () => {
  const carouselItems = React.useMemo(() => {
    return SOCIAL_FEEDS.map((member) => {
      return (
        <SocialCard
          onDragStart={handleDragStart}
          imageURL={member.avatarURL ?? ""}
          title={member.name ?? ""}
          description={member.role ?? ""}
        />
      );
    });
  }, []);

  return (
    <div className={`${styles["container"]} social-feed`}>
      <div className={`position-absolute ${styles["header"]} text-white fs-5`}>
        SOCIAL FEED
      </div>
      <AliceCarousel
        renderKey={0}
        mouseTracking
        items={carouselItems}
        renderDotsItem={renderDotsItem}
        controlsStrategy="responsive"
        autoPlayInterval={20}
        keyboardNavigation
        animationType="slide"
        animationEasingFunction="ease-in-out"
        autoPlayDirection="ltr"
        renderNextButton={() => null}
        renderPrevButton={() => null}
        responsive={{
          0: {
            items: 1,
          },
          800: {
            items: 1,
          },
        }}
      />
    </div>
  );
};
