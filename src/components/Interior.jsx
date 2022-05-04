import interior1 from "../img/interior_1.webp";
import interior2 from "../img/interior_2.webp";
function Interior() {
  return (
    <>
      <section className="w-full bg-[#F9FAFF] mt-16 lg:mt-28  pb-20  grid lg:grid-cols-2 grid-cols-1 px-4 sm:px-20 xl:px-[168px] lg:gap-x-36">
        <div className="mt-16">
          <img src={interior1} alt="interior1" />
        </div>
        <div className="lg:mt-28 lg:px-8 ">
          <p className="text-4xl font-semibold">
            We Believe that Interior beautifies the Total Architecture
          </p>
          <p className="mt-10 text-gray-500">
            inappropriate behavior is often laughed off as “boys will be boys,”
            women face higher conduct standards especially in the workplace.
            That’s why it’s crucial that, as women, our behavior on the job is
            beyond reproach. inappropriate behavior is often laughed off.
          </p>
          <button className="mt-10  bg-gradient-to-r from-[#bc2bff]  to-[#7249fb] rounded py-4 px-11 text-white text-sm font-semibold shadow-[0_10px_30px_0_rgba(115,75,251,0.3)] hover:bg-gradient-to-r hover:from-[#7249fb]  hover:to-[#bc2bff] transition-all duration-300">
            See Details
          </button>
        </div>
      </section>
      <section className="w-full px-4  pb-20 grid  grid-cols-1 lg:grid-cols-2 xl:px-[168px] sm:px-20 lg:gap-x-36">
        <div className="lg:mt-28 lg:px-8 ">
          <p className="text-4xl font-semibold">
            We Believe that Interior beautifies the Total Architecture
          </p>
          <p className="mt-10 text-gray-500">
            inappropriate behavior is often laughed off as “boys will be boys,”
            women face higher conduct standards especially in the workplace.
            That’s why it’s crucial that, as women, our behavior on the job is
            beyond reproach. inappropriate behavior is often laughed off.
          </p>
          <button className="mt-10  bg-gradient-to-r from-[#bc2bff]  to-[#7249fb] rounded py-4 px-11 text-white text-sm font-semibold shadow-[0_10px_30px_0_rgba(115,75,251,0.3)] hover:bg-gradient-to-r hover:from-[#7249fb]  hover:to-[#bc2bff] transition-all duration-300">
            See Details
          </button>
        </div>
        <div className="mt-16">
          <img src={interior2} alt="interior2" />
        </div>
      </section>
    </>
  );
}

export default Interior;
