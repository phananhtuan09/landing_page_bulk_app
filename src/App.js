import Features from "./components/Features";
import Header from "./components/Header";
import Interior from "./components/Interior";
import Prices from "./components/Prices";
import Feature from "./components/Feature";
import Thumbnail from "./components/Thumbnail";
import Review from "./components/Review";
import Download from "./components/Download";
import News from "./components/News";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
function App() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [isMobileTablet, setMobileTablet] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (windowSize.width < 1024) {
      setMobileTablet(true);
    } else {
      setMobileTablet(false);
    }
  }, [windowSize]);
  return (
    <div className="text-black overflow-x-hidden overflow-y-auto">
      <Header isMobileTablet={isMobileTablet} />
      <Features />
      <Interior />
      <Thumbnail />
      <Prices />
      <Feature />
      <Review />
      <Download />
      <News />
      <Footer />
    </div>
  );
}

export default App;
