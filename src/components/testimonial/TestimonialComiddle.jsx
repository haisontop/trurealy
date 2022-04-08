import React from 'react';
import AliceCarousel from "react-alice-carousel"
import Testimonialcocard from './TestimonialCocard';

const item = [
  {
      para: "God help us, we're in the hands of engineers. Must go faster... go, go, go, go, go! What do they got in there? King Kong? God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. Yes, Yes, without the oops!",
      author: "- Jeff Goldblum",
      img: "/assets/Rectangle 3033.png"
  },
  {
      para: "God help us, we're in the hands of engineers. Must go faster... go, go, go, go, go! What do they got in there? King Kong? God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. Yes, Yes, without the oops!",
      author: "- Jeff Goldblum",
      img: "/assets/Rectangle 3033.png"
  },
  {
      para: "God help us, we're in the hands of engineers. Must go faster... go, go, go, go, go! What do they got in there? King Kong? God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. Yes, Yes, without the oops!",
      author: "- Jeff Goldblum",
      img: "/assets/Rectangle 3033.png"
  },
  {
      para: "God help us, we're in the hands of engineers. Must go faster... go, go, go, go, go! What do they got in there? King Kong? God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. Yes, Yes, without the oops!",
      author: "- Jeff Goldblum",
      img: "/assets/Rectangle 3033.png"
  },
  {
      para: "God help us, we're in the hands of engineers. Must go faster... go, go, go, go, go! What do they got in there? King Kong? God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. Yes, Yes, without the oops!",
      author: "- Jeff Goldblum",
      img: "/assets/Rectangle 3033.png"
  },
  {
      para: "God help us, we're in the hands of engineers. Must go faster... go, go, go, go, go! What do they got in there? King Kong? God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. Yes, Yes, without the oops!",
      author: "- Jeff Goldblum",
      img: "/assets/Rectangle 3033.png"
  },
]

const handleDragStart = (event) => event.preventDefault();

const renderDotsItem = ({ isActive }) => {
  return isActive ? (
    <div
      className="mx-2 w-20 border-white"
      style={{ height: "20px", width: "20px", borderRadius: "20px", backgroundColor:"#A6A4CF"}}
    ></div>
  ) : (
    <div
      className="mx-2 w-8"
      style={{ height: "20px", width: "20px", borderRadius: "20px", border:"2px solid #929292" }}
    ></div>
  );
};

const SocialCard = (props) => {
  const { onDragStart, img, outhor, para } = props;

  return (
    <div
      className={`flex-col gap-y-2 p-4 rounded rounded-4 social-top-carosel-box`}
      onDragStart={onDragStart}
      style={{cursor: "pointer"}}
    >
        <div>
              <div>
               
              </div>
              <div>

              </div>
        </div>
      </div>
  );
};


const Testimonialcomiddle = () => {
   const carouselItems = React.useMemo(() => {
      return SOCIAL_FEEDS.map((member) => {
        return (
           <SocialCard
              onDragStart={handleDragStart}
              img={member.avatarURL ?? ""}
              author={member.name ?? ""}
              para={member.role ?? ""}
            />
                );
              });
        }, []);

    return (
        <div className='container mx-auto' style={{width: "100px"}}>
            <AliceCarousel 
               renderKey={0}
               items={carouselItems} 
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
    );
}

export default Testimonialcomiddle;
