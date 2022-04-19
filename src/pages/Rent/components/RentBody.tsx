import React from "react";
import style from "./RentBody.module.scss";

const RentBody = () =>{
return (
    <div className="position-relative overflow-hidden">
    <div className="text-center mx-auto pb-5" style={{width: "800px"}}>
        <h1 className="fw-normal  mt-5 pt-5" style={{fontSize: "60px"}}>WE TAKE A PROACTIVE <br /> APPROACH TO RENTING</h1>
        <hr style={{height: "2px"}} />
        <p className="mt-4 fs-5">With Tru Realty, your property benefits from outstanding exposure through traditional and digital advertising, as well as open lines of communication with real estate professionals representing the buyer. In short, Tru helps sell your home the right way!</p>
        <img src="/assets/US map.png" className="img-fluid mt-5" alt="" />
        <div className="my-5 pb-5">
            <form action="" className="d-flex px-5">
                <div className="w-100 border-bottom me-3">
                  <input type="text" className="w-100 me-3 border-0" placeholder="Seach by Address, City, Zip Code, etc." />
                </div>
                <button className="tru-help-btn fs-5 py-1 px-4 text-white">SEARCH</button>
            </form>
        </div>
        <img src="/assets/Mask Group 4.png" alt="" className="position-absolute img-fluid start-0" width="100%" style={{bottom: "-260px"}} />
        <img src="/assets/Path 108.png" className="position-absolute top-0" style={{left: "-100px"}} alt="" />
        <img src="/assets/Path 114.png" className="position-absolute top-0" style={{right: "-100px"}} alt="" />
    </div>
    </div>
)
}
export default RentBody;
