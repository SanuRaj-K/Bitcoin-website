import React from "react";
import leftArrow from "../Assets/Icons/Left Top.png";
import arrow from "../Assets/Icons/icons.png";
function Home() {
  return (
    <div className=" h-[70%]  flex items-end">
      <div>
        <div className=" text-white text-[64px] font-semibold  ">
          Ultrices ut etiam vulputate ante congue jokichn na{" "}
          <span className="  text-[#5F82FF]">Lorem Ipsum</span>
        </div>
        <div className=" flex cursor-pointer  text-white items-center">
          <div className=" bg-[#5F82FF] hover:text-[#5F82FF] px-[20px] rounded-md font-semibold py-[5px] hover:bg-white">
            Learn More
          </div>
          <div className="hover:bg-[#5F82FF]   px-[20px] rounded-md font-semibold py-[5px]    ml-3">
            Watch Video
          </div>
        </div>
        <div className=" flex justify-between">
          <div>
            <img src={leftArrow} alt="leftArrow" />
            <div className=" inline rounded-tl-[1px] rounded-tr-[16px]  rounded-b-[16px]  rounded-bl-[12px] text-white px-3 py-2 bg-[#5F82FF] ">
              Sustainable Growth
            </div>
          </div>
          <div>
            <div className=" inline rounded-l-[12px] rounded-tr-[16px] rounded-b-[16px] rounded-bl-[1px] text-white px-3 py-2 bg-[#5F82FF] ">
              Comprehensive Support
            </div>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
