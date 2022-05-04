import { AiFillApple, AiFillAndroid } from "react-icons/ai";

function Download() {
  return (
    <>
      <section className="bg-gradient-to-r from-[#bc2bff]  to-[#7249fb]  text-white lg:py-32 px-4 sm:px-20 py-16 flex flex-col items-center">
        <div className="text-center">
          <p className="text-2xl sm:text-4xl font-semibold">
            Download This App Today!
          </p>
          <p className="md:px-32 lg:px-64 my-8 text-sm ">
            It won’t be a bigger problem to find one video game lover in your
            neighbor. Since the introduction of Virtual Game, it has been
            achieving great heights so far as its popularity and technological
            advancement are concerned.
          </p>
        </div>
        <div className="flex gap-6 flex-col sm:flex-row">
          <a className="flex border-[1px] cursor-pointer border-white rounded-[4px] py-2 px-6 items-center justify-center group hover:bg-white hover:text-black transition-all duration-200 ease-linear">
            <AiFillApple size="44px " />
            <div className="ml-4 ">
              <p className="text-2xl font-semibold">Available</p>
              <p>on App Store</p>
            </div>
          </a>
          <a className="flex border-[1px] cursor-pointer border-white rounded-[4px] py-2 px-6 items-center justify-center hover:bg-white hover:text-black transition-all duration-200 ease-linear">
            <AiFillAndroid size="44px" />
            <div className="ml-4">
              <p className="text-2xl font-semibold">Available</p>
              <p>on CH Play</p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}

export default Download;
