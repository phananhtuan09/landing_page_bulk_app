import feature1 from "../img/feature_1.webp";
import feature2 from "../img/feature_2.webp";
import feature3 from "../img/feature_3.webp";
import feature4 from "../img/feature_4.webp";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
function Feature() {
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
      <section className="px-4 sm:px-20  lg:px-[168px] py-16 lg:py-32 w-full">
        <div className="text-center ">
          <p className="text-3xl lg:text-4xl font-semibold">
            Unique Screenshots
          </p>
          <p className="text-gray-500 text-sm font-normal mt-4 lg:mt-8 mb-24 lg:px-64">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <Slider {...settings}>
          <img src={feature1} alt="feature1" className="px-4" />
          <img src={feature2} alt="feature2" className="px-4" />
          <img src={feature3} alt="feature3" className="px-4" />
          <img src={feature4} alt="feature4" className="px-4" />
          <img src={feature1} alt="feature1" className="px-4" />
          <img src={feature2} alt="feature2" className="px-4" />
          <img src={feature3} alt="feature3" className="px-4" />
          <img src={feature4} alt="feature4" className="px-4" />
        </Slider>
      </section>
    </>
  );
}

export default Feature;
