import featureLogo from "../img/feature.webp";
function Features() {
  return (
    <section className="w-full px-4 sm:px-20 mt-16 lg:px-[168px] lg:mt-32">
      <div className="flex flex-col items-center">
        <p className="text-3xl lg:text-4xl font-semibold">Unique Features</p>
        <p className="mt-4 text-gray-600 lg:w-[60%] w-full break-words lg:px-12 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7 mt-20 text-left">
        <div className="px-7 py-12 shadow-[0_7px_29px_0_rgba(100,100,111,0.2)] rounded break-words">
          <img src={featureLogo} alt="feature" />
          <p className="mt-8 text-xl font-semibold text-[#222]">Maintenance</p>
          <p className="mt-3.5 text-gray-500 text-[15px]">
            inappropriate behavior is often laughed off as boys will be boys,”
            women face higher conduct standards especially in the workplace.
            That’s why.
          </p>
        </div>
        <div className="px-7 py-12 shadow-[0_7px_29px_0_rgba(100,100,111,0.2)] rounded break-words">
          <img src={featureLogo} alt="feature" />
          <p className="mt-8 text-xl font-semibold text-[#222]">Maintenance</p>
          <p className="mt-3.5 text-gray-500 text-[15px]">
            inappropriate behavior is often laughed off as boys will be boys,”
            women face higher conduct standards especially in the workplace.
            That’s why.
          </p>
        </div>
        <div className="px-7 py-12 shadow-[0_7px_29px_0_rgba(100,100,111,0.2)] rounded break-words">
          <img src={featureLogo} alt="feature" />
          <p className="mt-8 text-xl font-semibold text-[#222]">Maintenance</p>
          <p className="mt-3.5 text-gray-500 text-[15px]">
            inappropriate behavior is often laughed off as boys will be boys,”
            women face higher conduct standards especially in the workplace.
            That’s why.
          </p>
        </div>
        <div className="px-7 py-12 shadow-[0_7px_29px_0_rgba(100,100,111,0.2)] rounded break-words">
          <img src={featureLogo} alt="feature" />
          <p className="mt-8 text-xl font-semibold text-[#222]">Maintenance</p>
          <p className="mt-3.5 text-gray-500 text-[15px]">
            inappropriate behavior is often laughed off as boys will be boys,”
            women face higher conduct standards especially in the workplace.
            That’s why.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
