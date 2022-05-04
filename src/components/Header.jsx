import React, { useState, useEffect } from "react";
import logo from "../img/logo.webp";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

function Header(props) {
  const { isMobileTablet } = props;
  const [fixedNavbar, setFixedNavbar] = useState(false);
  const [isOpenMenu, setOpenMenu] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setFixedNavbar(true);
      } else {
        setFixedNavbar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fixedNavbar]);
  return (
    <>
      <header className="text-[#fff] w-full   px-8 sm:px-20 pb-32 pt-8 xl:px-[168px]   bg-[url('https://preview.colorlib.com/theme/bulkapp/img/banner/xhome-banner.jpg.pagespeed.ic.wpYjhdIc7D.png')] ">
        <nav
          className={`${
            fixedNavbar || isMobileTablet
              ? "navbar-fixed animate-[navSlip_0.4s_linear_forwards] md:px-20"
              : "navbar-normal"
          }  flex items-center  justify-between flex-wrap `}
        >
          <a className="cursor-pointer ">
            {/* <p className="text-lg font-bold cursor-pointer">Bulk App</p> */}
            <img src={logo} alt="logo" />
          </a>
          {isMobileTablet && !isOpenMenu ? (
            <div
              className="cursor-pointer pl-4 py-4 "
              onClick={() => setOpenMenu(!isOpenMenu)}
            >
              <AiOutlineMenu size="24px" />
            </div>
          ) : isMobileTablet && isOpenMenu ? (
            <>
              <div
                className="cursor-pointer pl-4 py-4 "
                onClick={() => setOpenMenu(!isOpenMenu)}
              >
                <IoMdClose size="24px" />
              </div>
              <div className="basis-full animate-[menuSlip_0.3s_linear_forwards]  grow mt-[24px] backdrop-blur-md text-black w-full">
                <ul className="flex   flex-col uppercase  text-xs  w-full font-semibold">
                  <li className=" mx-4 mt-4  pb-4 border-b-[1px] border-b-white ">
                    <a className="">Home</a>
                  </li>
                  <li className=" mx-4 mt-4  pb-4 border-b-[1px] border-b-white ">
                    <a>Features</a>
                  </li>
                  <li className=" mx-4 mt-4 pb-4  border-b-[1px] border-b-white ">
                    <a>Video</a>
                  </li>
                  <li className=" mx-4 mt-4 pb-4  border-b-[1px] border-b-white ">
                    <a>Pricing</a>
                  </li>
                  <li className=" mx-4 mt-4  pb-4 border-b-[1px] border-b-white ">
                    <a>Screens</a>
                  </li>
                  <li className="mx-4 mt-4  pb-4 border-b-[1px] border-b-white relative group">
                    <a>Pages</a>
                    <ul className="absolute text-xs translate-x-[50px] translate-y-[-100px] bg-white text-black w-[100px] hidden group-hover:block animate-[liHover_0.3s_ease-in_forwards]">
                      <li className="navbar-item ">
                        <a className="text-xs">Elements</a>
                      </li>
                    </ul>
                  </li>
                  <li className="mx-4 mt-4 pb-4 border-b-[1px] border-b-white relative group">
                    <a>Blog</a>
                    <ul className="absolute text-xs translate-x-[50px] translate-y-[-100px] bg-white text-black w-[100px] hidden group-hover:block  animate-[liHover_0.3s_ease-in_forwards]">
                      <li className="navbar-item odd:border-b-[1px] odd:border-b-gray-200  ">
                        <a>Blog</a>
                      </li>
                      <li className="navbar-item  odd:border-b-[1px] odd:border-b-gray-200">
                        <a>Blog Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="mx-4 mt-4 pb-4">
                    <a>Contact</a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <ul className="flex gap-8 uppercase text-xs font-semibold items-center">
              <li className="hover:text-neutral-300 cursor-pointer py-8 ">
                <a>Home</a>
              </li>
              <li className="hover:text-neutral-300 cursor-pointer py-8 ">
                <a>Features</a>
              </li>
              <li className="hover:text-neutral-300 cursor-pointer py-8 ">
                <a>Video</a>
              </li>
              <li className="hover:text-neutral-300 cursor-pointer py-8 ">
                <a>Pricing</a>
              </li>
              <li className="hover:text-neutral-300 cursor-pointer py-8 ">
                <a>Screens</a>
              </li>
              <li className="hover:text-neutral-300 cursor-pointer py-8 relative group">
                <a>Pages</a>
                <ul className="absolute top-28 translate-x-[-80%] bg-white text-black w-[200px] hidden group-hover:block animate-[liHover_0.3s_ease-in_forwards]">
                  <li className="navbar-item">
                    <a>Elements</a>
                  </li>
                </ul>
              </li>
              <li className="hover:text-neutral-300 cursor-pointer py-8 relative group">
                <a>Blog</a>
                <ul className="absolute top-28 translate-x-[-80%] bg-white text-black w-[200px] hidden group-hover:block  animate-[liHover_0.3s_ease-in_forwards]">
                  <li className="navbar-item odd:border-b-[1px] odd:border-b-gray-200  ">
                    <a>Blog</a>
                  </li>
                  <li className="navbar-item  odd:border-b-[1px] odd:border-b-gray-200">
                    <a>Blog Details</a>
                  </li>
                </ul>
              </li>
              <li className="hover:text-neutral-300 cursor-pointer py-8">
                <a>Contact</a>
              </li>
            </ul>
          )}
        </nav>
        <section className="mt-28 w-full  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center ">
          <div className=" col-start-1  md:col-end-3 lg:col-end-3">
            <h1 className="text-4xl  sm:text-6xl lg:text-7xl font-bold">
              The Best App in the Universe
            </h1>
            <p className="text-sm mt-4">
              inappropriate behavior is often laughed off as “boys will be
              boys,” women face higher conduct standards especially in the
              workplace. That’s why it’s crucial that, as women.
            </p>
            <button className="bg-white text-black rounded-[4px] py-3 px-10 flex items-center mt-10 hover:bg-neutral-300">
              Explore Now
            </button>
          </div>
          <div className="col-start-4 hidden lg:block">
            <img
              className="w-full"
              src="https://preview.colorlib.com/theme/bulkapp/img/banner/xright-mobile.png.pagespeed.ic.t6SpOF8dbo.webp"
              alt="bulk app"
            />
          </div>
        </section>
      </header>
    </>
  );
}

export default Header;
