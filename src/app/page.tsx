import HeroBanner from "./components/hero-banner";
import MarqueeBanner from "./components/marquee";
import EventSection from "./components/sections/events";
import SermonsSection from "./components/sections/latest-sermons";
import MissionSection from "./components/sections/our-mission";
import ServicesSection from "./components/sections/services";
import HomePageSection from "./components/sections/worship-with-us";

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
