import thumbnailImg from "../img/video.webp";
import videoIcon from "../img/video_icon.webp";
function Thumbnail() {
  return (
    <>
      <div className="flex justify-center relative mb-32 px-4 sm:px-20">
        <img src={thumbnailImg} alt="thumbnail image w-full h-full " />
        <a className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] cursor-pointer">
          <img src={videoIcon} alt="video icon" />
        </a>
      </div>
    </>
  );
}

export default Thumbnail;
