import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import {FaInstagram} from "react-icons/fa"
import internal from 'stream';
const SOCIAL_FEEDS = [
    {
      name: "King-Kong",
      role: "programmer",
      avatarURL: "/assets/Rectangle 170.png",
    },
    {
      name: "King-Kong",
      role: "programmer",
      avatarURL: "/assets/Rectangle 170.png",
    },
    {
      name: "King-Kong",
      role: "programmer",
      avatarURL: "/assets/Rectangle 170.png",
    },
    {
      name: "King-Kong",
      role: "programmer",
      avatarURL: "/assets/Rectangle 170.png",
    },
    {
      name: "King-Kong",
      role: "programmer",
      avatarURL: "/assets/Rectangle 170.png",
    },
    {
      name: "King-Kong",
      role: "programmer",
      avatarURL: "/assets/Rectangle 170.png",
    },
    {
      name: "King-Kong",
      role: "programmer",
      avatarURL: "/assets/Rectangle 170.png",
    },
    {
      name: "King-Kong",
      role: "programmer",
      avatarURL: "/assets/Rectangle 170.png",
    },
    {
      name: "King-Kong",
      role: "programmer",
      avatarURL: "/assets/Rectangle 170.png",
    },
  ];
  
  const handleDragStart = (event: any) => event.preventDefault();
  
  const renderDotsItem = ({ isActive } : { isActive: boolean }) => {
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
  interface props{
      onDragStart : any;
      imageURL: string;
      title: string;
      description: string;
  }
  
  const SocialCard = (props : props) => {
    const { onDragStart, imageURL, title, description } = props;
  
    return (
      <div
        className={`flex-col gap-y-2 p-4 rounded rounded-4 social-top-carosel-box`}
        onDragStart={onDragStart}
        style={{cursor: "pointer"}}
      >
        <div>
        <div  className="">
          <img
            src={imageURL}
            height="100%"
            width="100%"
            className="mx-2"
          />
        </div>
        <div className="text-white position-absolute p-4 fs-5 social-top-carosel mx-2" style={{backgroundColor: "#7A77B7"}}>
            <p>God help us, we're in the hands of engineers. Must go faster...</p>
            <p>#goldblum #dinosaurs #inthenameofprogress</p>
            <div className='d-flex justify-content-between mt-5 pt-3'>
              <div className='d-flex'>
               <div className='me-2'>
                 <img src="/assets/Ellipse 37.png" className='img-fluid mb-1' width="20px" alt="" />
                 <p className='d-inline'>18</p>
               </div>
               <div className=''>
                 <img src="/assets/Ellipse 37.png" className='img-fluid mb-1' width="20px" alt="" />
                 <p className='d-inline'>18</p>
               </div>
              </div>
              <div>
                 <FaInstagram size="25px" className='p-1 border rounded rounded-circle' />
              </div>
            </div>
        </div>
        </div>
      </div>
    );
  };
  

const Socialcotop = () => {
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
        <div>
            <div className='container mt-5'>
               <h2 className='fw-normal ms-5'>INSTAGRAM</h2>
               <div style={{width: "1000px"}}>
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
                      items: 3,
                    },
                  }}
                />
               </div>
            </div>
        </div>
    );
}

export default Socialcotop;
