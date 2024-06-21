import React from "react";
import avatar from "../Assets/Images/rounded 1.svg";
function Testimonial() {
  return (
    <div>
      <div className="  py-4 w-[330px]  bg-[#1F54644D] text-[#F1F1F1] rounded-md">
        <div className=" flex flex-col items-center justify-center pt-3">
          <img src={avatar} alt="avatar" />
          <div className=" mt-3 flex flex-col items-center text-[#F1F1F1]">
            <span className=" text-[16px]">Lorem ipsum dolor</span>
            <span className=" text-[14px]">Lorem ipsum dolor</span>
          </div>
        </div>
        <div className=" ml-6 mt-4">
          <span className="text-[16px]">Lorem ipsum dolor sit amet <br /> consectetur. </span>
          <p className=" text-[14px]">
            Lorem ipsum dolor sit amet consectetur.   eu aenean dignissim
            sagittis malesuada consectetur. Suspendisse lectus mi nulla
            consectetur elementum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
