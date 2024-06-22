import React from "react";
import leftArrow from "../Assets/Icons/Left Top.png";
import arrow from "../Assets/Icons/icons.png";
function Home() {
  return (
    <div className=" h-[70%]  flex items-end">
      <div>
        <div className=" text-white sm:text-[64px] mb-3 text-[30px] font-semibold  ">
          Ultrices ut etiam vulputate ante congue jokichn na{" "}
          <span className=" inline-block animate-bounce  text-[#5F82FF]">Lorem Ipsum</span>
        </div>
        
        <div className=" flex  flex-col mt-4 sm:mt-0 sm:flex-row cursor-pointer  text-white items-center">
          <div className=" bg-[#5F82FF] hover:text-[#5F82FF] px-[20px] rounded-md font-semibold py-[5px] hover:bg-white">
            Learn More
          </div>
          <div className="hover:bg-[#5F82FF] mt-5 sm:mt-0   px-[20px] rounded-md font-semibold py-[5px]    ml-3">
            Watch Video
          </div>   
        </div>
        <div className=" md:flex hidden justify-between">
          <div className="  animate-pulse">
            <img src={leftArrow} alt="leftArrow" />
            <div className=" inline rounded-tl-[1px] rounded-tr-[16px]  rounded-b-[16px]  rounded-bl-[12px] text-white px-3 py-2 bg-[#5F82FF] ">
              Sustainable Growth
            </div>
          </div>
          <div  className=" animate-bounce">
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
