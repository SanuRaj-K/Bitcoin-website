import React from "react";
import Logo from "../Assets/Icons/logo.png";

function Header() {
  const HeaderLinks = [
    "Home",
    "About",
    "Service",
    "Page",
    "News",
    "ContactUs",
    "Get Started",
  ];
  return (
    <div>
      <header className="    text-white ">
        <div className=" pt-4">
          <div className=" flex justify-between">
            <div className=" cursor-pointer flex items-center">
              <img src={Logo} width={40} height={40} alt="logo" />
              <span className=" text-[32px] font-semibold ml-2">BitNow</span>
            </div>
            <div>
              <ul className=" flex justify-between items-center">
                {HeaderLinks?.map((item, index) => (
                  <li
                    key={index}
                    className=" cursor-pointer px-4 hover:text-[#5F82FF] last:bg-[#5F82FF] last:px-[20px] last:rounded-md font-semibold last:py-[5px] last:hover:bg-white "
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
