import avatar1 from "../img/avatar_1.webp";
import avatar2 from "../img/avatar_2.webp";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
function Review() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
  };
  return (
    <>
      <section className="px-4 sm:px-20 md:px-32 lg:px-16 xl:px-[168px] py-16 lg:py-32 bg-[#F9F9FF]">
        <div className="text-center mb-32">
          <p className="text-4xl font-semibold">Testimonials</p>
          <p className="mt-6 text-gray-500 lg:px-64">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-10 flex flex-col lg:flex-row cursor-pointer hover:shadow-[0_10px_30px_0_rgba(157,157,157,0.2)] transition_all duration-300 ease-linear">
            <img
              src={avatar1}
              alt="avatar 1"
              className="w-[100px] lg:h-[50%]"
            />
            <div className="mt-4 lg:mt-0 lg:ml-8">
              <p className=" text-gray-500">
                Accessories Here you can find the best computer accessory for
                your laptop, monitor, printer, scanner, speaker, projector,
                hardware.
              </p>
              <div className="mt-8">
                <p className="text-xl font-semibold">Mark Alviro Wiens</p>
                <p className="text-gray-500">CEO at Google</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-10 flex flex-col lg:flex-row cursor-pointer hover:shadow-[0_10px_30px_0_rgba(157,157,157,0.2)] transition_all duration-300 ease-linear">
            <img
              src={avatar2}
              alt="avatar 2"
              className="w-[100px] lg:h-[50%]"
            />
            <div className="mt-4 lg:mt-0 lg:ml-8">
              <p className=" text-gray-500">
                Accessories Here you can find the best computer accessory for
                your laptop, monitor, printer, scanner, speaker, projector,
                hardware.
              </p>
              <div className="mt-8">
                <p className="text-xl font-semibold">Mark Alviro Wiens</p>
                <p className="text-gray-500">CEO at Google</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Review;
