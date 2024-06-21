import React from "react";
import Logo from "../Assets/Icons/logo.png";
import facebook from "../Assets/Icons/facebook-logo-svgrepo-com 1.png";
import Twitter from "../Assets/Icons/twitter.png";
import Insta from "../Assets/Icons/instagram-round-svgrepo-com 1.png";
import Arrow from "../Assets/Icons/chevron_left_black_24dp (1) 2.png";
import DownArrow from "../Assets/Icons/DownArrow.png";
import Globe from "../Assets/Icons/language_black_24dp 1.png";

function Footer() {
  const OtherPage = ["Home", "About", "Service", "Token Sale", "Contact"];
  const QuickLink = [
    "Privacy Policy",
    "Terms of Services",
    "Disclaimer",
    "Credits",
    "FAQ",
  ];
  return (
    <div>
      <div className=" flex  flex-col  md:flex-row md:justify-between       text-[#D7F5FF]">
        <div>
          <div className="  flex flex-col justify-between  h-full">
            <div className="">
              <div className=" flex items-center">
                <img className=" mr-2" src={Logo} alt="logo" />
                <span className=" text-[32px] text-[#D7F5FF] font-semibold ">
                  Bit Now
                </span>
              </div>

              <div>
                {" "}
                <div>Lorem Ipsum, jhdjnfnj Htehiuijnerv</div>
              </div>
            </div>
            <div className=" flex py-4 sm:py-0   mt-auto      ">
              <img src={facebook} alt="" />
              <img className=" mx-3 " src={Insta} alt="" />
              <img src={Twitter} alt="" />
            </div>
          </div>
        </div>
        <div>
          <span className=" text-[20px]  font-semibold">Other Pages</span>
          <div className=" mt-2">
            {OtherPage.map((item) => (
              <>
                <div className=" flex items-center mb-4" key={item}>
                  <img src={Arrow} alt="arrow" />
                  <div className=" cursor-pointer">{item}</div>
                </div>
              </>
            ))}
          </div>
        </div>
        <div>
          <span className=" text-[20px]  font-semibold">Quick Links</span>
          <div className="mt-2">
            {QuickLink.map((item) => (
              <>
                <div className=" flex items-center mb-4" key={item}>
                  <img src={Arrow} alt="arrow" />
                  <div className="  cursor-pointer">{item}</div>
                </div>
              </>
            ))}
          </div>
        </div>
        <div>
          <span className=" text-[20px] text-[#D7F5FF] font-semibold">
            Newsletter
          </span>
          <p className=" text-[16px] text-[#E6FCFF] ">
            At habitant maecenas lacus adipiscing non. <br /> Accumsan etiam non
            praesent{" "}
          </p>
          <div className=" flex flex-col">
            <input
              className=" mb-2 border-none outline-none pl-5 h-[40px] text-black rounded-lg"
              type="text"
              placeholder="Enter Your Email"
              name=""
              id=""
            />
            <div className="  cursor-pointer hover:text-[#5F82FF] hover:bg-white bg-[#5F82FF] px-3 py-2 inline rounded-lg text-center text-black">
              Subscribe
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-7">
        <hr />
      </div>
      <div className=" flex  md:justify-between flex-col md:flex-row  items-center py-7 text-[#D7F5FF]">
        <div className=" flex mb-4 sm:mb-0 ">
          <img className=" mr-2" src={Globe} alt="globe" />
          <span>Cestina</span>
          <img className=" ml-4" src={DownArrow} alt="arrow" />
        </div>
        <div>
          <ul className=" flex justify-between">
            <li>Privacy Policy</li>
            <li className=" mx-4">Notice at Collection</li>
            <li className=" mr-4">Terms</li>
            <li>Copyright © 2023 Atlassian</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
