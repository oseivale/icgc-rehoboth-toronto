import HeroBanner from "./components/hero-banner";
import MarqueeBanner from "./components/marquee";
import EventSection from "./components/sections/home/events";
import SermonsSection from "./components/sections/home/latest-sermons";
import MissionSection from "./components/sections/home/our-mission";
import ServicesSection from "./components/sections/home/services";
import HomePageSection from "./components/sections/home/worship-with-us";

export default function Home() {
  return (
    <div>
      {/* <h1 className="pageContainer">HOME</h1> */}
      <HeroBanner />
      <MarqueeBanner />
      <HomePageSection />
      <MissionSection />
      <ServicesSection />
      <EventSection />
      <SermonsSection />
    </div>
  );
}
