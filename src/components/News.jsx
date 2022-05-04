import { BsFillEyeFill } from "react-icons/bs";
import { FaCommentDots } from "react-icons/fa";
import { GoReply } from "react-icons/go";
function News() {
  return (
    <>
      <section className="px-4 sm:px-20 md:px-40 lg:px-16 xl:px-[168px] py-16 lg:py-32">
        <div className="text-center ">
          <p className="text-3xl lg:text-4xl font-semibold mb-6">Latest News</p>
          <p className="text-gray-600 lg:px-64">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="mt-16 lg:mt-32 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <a className="w-full h-full cursor-pointer bg-[#F9F9FF] rounded-sm px-8 py-16 hover:shadow-[0_10px_30px_0_rgba(0,0,0,0.08)] transition-all duration-200 ease-linear group">
            <span className="border-[1px] border-gray-300 bg-white py-1 px-4 rounded text-gray-600 group-hover:bg-gradient-to-r group-hover:from-[#bc2bff] group-hover:to-[#7249fb] group-hover:text-white transition-all duration-200 ease-linear">
              10 April, 2018
            </span>
            <p className="text-lg font-semibold uppercase my-6 group-hover:bg-gradient-to-r group-hover:from-[#bc2bff] group-hover:to-[#7249fb] group-hover:text-transparent group-hover:bg-clip-text transition-all duration-200 ease-linear">
              Benjamin Franklin Method Of Habit Formation
            </p>
            <p className="text-gray-600 mt-[-16px]">
              There are many kinds of narratives and organizing principles.
              Science is driven by evidence gathered in experiments, and by the
              falsification of extant theories and their
            </p>
            <div className="flex items-center flex-wrap text-gray-400 mt-8">
              <div className="flex items-center mr-4 xl:mr-8">
                <BsFillEyeFill size="14px" />
                <span className="ml-3">4.5k Views</span>
              </div>
              <div className="flex items-center mr-4 xl:mr-8">
                <FaCommentDots size="14px" />
                <span className="ml-3">07</span>
              </div>
              <div className="flex items-center mr-4 xl:mr-8">
                <GoReply size="14px" />
                <span className=" ml-3">362</span>
              </div>
            </div>
          </a>
          <a className="w-full h-full cursor-pointer bg-[#F9F9FF] rounded-sm px-8 py-16 hover:shadow-[0_10px_30px_0_rgba(0,0,0,0.08)] transition-all duration-200 ease-linear group">
            <span className="border-[1px] border-gray-300 bg-white py-1 px-4 rounded text-gray-600 group-hover:bg-gradient-to-r group-hover:from-[#bc2bff] group-hover:to-[#7249fb] group-hover:text-white transition-all duration-200 ease-linear">
              10 April, 2018
            </span>
            <p className="text-lg font-semibold uppercase my-6 group-hover:bg-gradient-to-r group-hover:from-[#bc2bff] group-hover:to-[#7249fb] group-hover:text-transparent group-hover:bg-clip-text transition-all duration-200 ease-linear">
              Benjamin Franklin Method Of Habit Formation
            </p>
            <p className="text-gray-600 mt-[-16px]">
              There are many kinds of narratives and organizing principles.
              Science is driven by evidence gathered in experiments, and by the
              falsification of extant theories and their
            </p>
            <div className="flex items-center flex-wrap text-gray-400 mt-8">
              <div className="flex items-center mr-4 xl:mr-8">
                <BsFillEyeFill size="14px" />
                <span className="ml-3">4.5k Views</span>
              </div>
              <div className="flex items-center mr-4 xl:mr-8">
                <FaCommentDots size="14px" />
                <span className="ml-3">07</span>
              </div>
              <div className="flex items-center mr-4 xl:mr-8">
                <GoReply size="14px" />
                <span className="ml-3">362</span>
              </div>
            </div>
          </a>
          <a className="w-full h-full cursor-pointer bg-[#F9F9FF] rounded-sm px-8 py-16 hover:shadow-[0_10px_30px_0_rgba(0,0,0,0.08)] transition-all duration-200 ease-linear group">
            <span className="border-[1px] border-gray-300 bg-white py-1 px-4 rounded text-gray-600 group-hover:bg-gradient-to-r group-hover:from-[#bc2bff] group-hover:to-[#7249fb] group-hover:text-white transition-all duration-200 ease-linear">
              10 April, 2018
            </span>
            <p className="text-lg font-semibold uppercase my-6 group-hover:bg-gradient-to-r group-hover:from-[#bc2bff] group-hover:to-[#7249fb] group-hover:text-transparent group-hover:bg-clip-text transition-all duration-200 ease-linear">
              Benjamin Franklin Method Of Habit Formation
            </p>
            <p className="text-gray-600 mt-[-16px]">
              There are many kinds of narratives and organizing principles.
              Science is driven by evidence gathered in experiments, and by the
              falsification of extant theories and their
            </p>
            <div className="flex items-center flex-wrap text-gray-400 mt-8">
              <div className="flex items-center mr-4 xl:mr-8">
                <BsFillEyeFill size="14px" />
                <span className="ml-3">4.5k Views</span>
              </div>
              <div className="flex items-center mr-4 xl:mr-8">
                <FaCommentDots size="14px" />
                <span className="ml-3">07</span>
              </div>
              <div className="flex items-center mr-4 xl:mr-8">
                <GoReply size="14px" />
                <span className="ml-3">362</span>
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}

export default News;
