import HeroBanner from "./components/hero-banner";
import MarqueeBanner from "./components/marquee";
import SermonsSection from "./components/sections/latest-sermons";
import MissionSection from "./components/sections/our-mission";
import HomePageSection from "./components/sections/worship-with-us";

export default function Home() {
  return (
    <div>
      {/* <h1 className="pageContainer">HOME</h1> */}
      <HeroBanner />
      <MarqueeBanner />
      <HomePageSection />
      <MissionSection />
      <SermonsSection />
    </div>
  );
}
