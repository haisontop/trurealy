import React from 'react';
import AliceCarousel from "react-alice-carousel"
import 'react-alice-carousel/lib/alice-carousel.css';

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

const handleDragStart = (event : any) => event.preventDefault();

const renderDotsItem = ({ isActive } : { isActive: boolean })  => {
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

interface SocialCardProps {
  onDragStart: (event: any) => void;
  img: string;
  author: string;
  para: string;
}

const SocialCard = (props : SocialCardProps) => {
  const { onDragStart, img, author, para } = props;

  return (
    <div
      className={`flex-col gap-y-2 p-4 rounded rounded-4 social-top-carosel-box`}
      onDragStart={onDragStart}
      style={{cursor: "pointer"}}
    >
        <div className='row mt-5 pt-5 gx-5'>
              <div className='col-5'>
                <img src={img} width="100%" alt="" />
              </div>
              <div className='col-4 d-flex justify-content-center aling-items-center'>
                <div>
                  <sup className='fs-3 fw-bold f'>``</sup><p className='fs-5'>{para}</p>
                   <p className='fs-5 mt-5'>{author}</p>
                </div>
              </div>
        </div>
      </div>
  );
};


const Testimonialcomiddle = () => {
   const carouselItems = React.useMemo(() => {
      return item.map((member) => {
        return (
           <SocialCard
              onDragStart={handleDragStart}
              img={member.img ?? ""}
              author={member.author ?? ""}
              para={member.para ?? ""}
            />
                );
              });
        }, []);

    return (
        <div className='container mx-auto' style={{width: "1000px"}}>
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
