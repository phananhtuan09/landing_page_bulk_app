import img1 from "../img/img1.webp";
import {
  AiOutlineHeart,
  AiOutlineTwitter,
  AiOutlineDribbble,
  AiOutlineBehance,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <>
      <section className="px-4 lg:px-16 xl:px-[168px] bg-[#222] text-white py-16 lg:py-32">
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="">
            <p className="text-xl font-semibold mb-4">TOP PRODUCTS</p>
            <ul className="">
              <li className=" hover:translate-x-1 transition-all duration-200 ease-linear">
                <a className="font-light cursor-pointer block py-2">
                  Managed Website
                </a>
              </li>
              <li className=" hover:translate-x-1 transition-all duration-200 ease-linear">
                <a className="font-light cursor-pointer block py-2">
                  Manage Reputation
                </a>
              </li>
              <li className=" hover:translate-x-1 transition-all duration-200 ease-linear">
                <a className="font-light cursor-pointer block py-2">
                  Power Tools
                </a>
              </li>
              <li className=" hover:translate-x-1 transition-all duration-200 ease-linear">
                <a className="font-light cursor-pointer block py-2">
                  Marketing Service
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2 lg:pr-12">
            <p className="text-xl font-semibold mb-4">NEWSLETTER</p>
            <p className="text-[#A7A7A7]">
              You can trust us. we only send promo offers, not a single spam.
            </p>
            <form
              className="my-8 w-full relative"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                placeholder="Email address"
                className="text-gray-400 px-4 py-2 rounded-[50px] w-full outline-none"
              />
              <button
                className="absolute right-[0px]  bg-gradient-to-r from-[#bc2bff]  to-[#7249fb] py-3 px-10 rounded-[50px] text-xs font-medium"
                type="submit"
              >
                Get Started
              </button>
            </form>
          </div>
          <div>
            <p className="text-xl font-semibold mb-4">INSTAGRAM FEED</p>
            <ul className="grid grid-cols-4 gap-2 ">
              <li>
                <img src={img1} alt="img1" />
              </li>
              <li>
                <img src={img1} alt="img1" />
              </li>
              <li>
                <img src={img1} alt="img1" />
              </li>
              <li>
                <img src={img1} alt="img1" />
              </li>
              <li>
                <img src={img1} alt="img1" />
              </li>
              <li>
                <img src={img1} alt="img1" />
              </li>
              <li>
                <img src={img1} alt="img1" />
              </li>
              <li>
                <img src={img1} alt="img1" />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center md:justify-between mt-20">
          <p className="text-center text-sm font-semibold text-stone-400">
            Copyright ©2022 All rights reserved | This template is made with{" "}
            <span className="flex justify-center">
              <span className="text-[#6247ea] mx-1 ">
                <AiOutlineHeart size="20px" className="" />
              </span>{" "}
              by
              <span className="text-[#6247ea] mx-1 ">Colorlib</span>
            </span>
          </p>
          <div className="flex items-center mt-4 lg:mt-0">
            <a className="mr-4 bg-[#111] p-2 rounded-sm cursor-pointer hover:bg-gradient-to-r hover:from-[#bc2bff] hover:to-[#7249fb]">
              <FaFacebookF />
            </a>
            <a className="mr-4 bg-[#111] p-2 rounded-sm cursor-pointer hover:bg-gradient-to-r hover:from-[#bc2bff] hover:to-[#7249fb]">
              <AiOutlineTwitter />
            </a>
            <a className="mr-4 bg-[#111] p-2 rounded-sm cursor-pointer hover:bg-gradient-to-r hover:from-[#bc2bff] hover:to-[#7249fb]">
              <AiOutlineDribbble />
            </a>
            <a className="mr-4 bg-[#111] p-2 rounded-sm cursor-pointer hover:bg-gradient-to-r hover:from-[#bc2bff] hover:to-[#7249fb]">
              <AiOutlineBehance />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
